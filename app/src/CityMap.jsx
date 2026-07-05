import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './CityMap.css';

// Interactive city map (Leaflet + OpenStreetMap, no API key).
// Each place is an emoji divIcon pin; tapping one calls onSelect(place.id).
// Visited pins (lesson complete) get the accent ring; the selected pin pops.
//
// Props:
//   places          , [{ id, name, icon, coords:[lat,lng] }]
//   accentColor     , city accent hex (pin ring + visited fill)
//   selectedPlaceId , currently open place id (or null)
//   doneIds         , Set<string> of explored place ids
//   onSelect        , (placeId: string) => void
export default function CityMap({ places, accentColor, selectedPlaceId, doneIds, onSelect }) {
  const mapEl = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef({}); // placeId -> L.Marker

  // Create the map once.
  useEffect(() => {
    if (mapRef.current || !mapEl.current) return;
    const lats = places.map((p) => p.coords[0]);
    const lngs = places.map((p) => p.coords[1]);
    const bounds = L.latLngBounds(
      [Math.min(...lats), Math.min(...lngs)],
      [Math.max(...lats), Math.max(...lngs)],
    );

    const map = L.map(mapEl.current, { scrollWheelZoom: false, attributionControl: true });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap',
    }).addTo(map);
    map.fitBounds(bounds, { padding: [40, 40] });

    places.forEach((place) => {
      const marker = L.marker(place.coords, {
        icon: L.divIcon({ className: 'city-pin-wrap', html: '', iconSize: [40, 48], iconAnchor: [20, 46] }),
        title: place.name,
        keyboard: false,
      }).addTo(map);
      marker.on('click', () => onSelect(place.id));
      markersRef.current[place.id] = marker;
    });

    mapRef.current = map;
    return () => { map.remove(); mapRef.current = null; markersRef.current = {}; };
    // ponytail: build once. places/accent are static per city; we don't rebuild
    // the map on prop change — only the pin HTML below updates.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Repaint pins when selection / completion changes (cheap: just swap HTML).
  useEffect(() => {
    places.forEach((place) => {
      const marker = markersRef.current[place.id];
      if (!marker) return;
      const visited = doneIds?.has(place.id);
      const selected = place.id === selectedPlaceId;
      const cls = ['city-pin', visited && 'city-pin--visited', selected && 'city-pin--selected']
        .filter(Boolean).join(' ');
      const el = marker.getElement();
      if (!el) return;
      // Build the pin with DOM APIs so content values can never become markup.
      const pin = document.createElement('span');
      pin.className = cls;
      pin.style.setProperty('--pin-accent', accentColor);
      const icon = document.createElement('span');
      icon.className = 'city-pin__icon';
      icon.textContent = place.icon;
      pin.appendChild(icon);
      if (visited) {
        const check = document.createElement('span');
        check.className = 'city-pin__check';
        check.textContent = '✓';
        pin.appendChild(check);
      }
      el.replaceChildren(pin);
    });
  }, [places, accentColor, selectedPlaceId, doneIds]);

  return <div ref={mapEl} className="city-map" role="application" aria-label="City map" />;
}
