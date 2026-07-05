import { countryFillPath } from './mapUtil';

// Presentational helper: draws a journey map's SOURCE-space layers under a given
// transform, mirroring MapScreen's styling/order (borders, country fill, outline).
// Used by MapPanOverlay to render two same-basis journeys into one animated camera.
// The country-fill tint opacity is animatable, for the focus cross-fade during a pan.
export default function MapSourceLayers({ map, transform, tintOpacity = 1 }) {
  const countryFillD = countryFillPath(map);
  return (
    <g transform={transform}>
      {/* cropped neighbours painted as land */}
      {map.landIslands?.map((d, i) => (
        <path key={`li${i}`} d={d} fill={map.landFill} stroke="none" />
      ))}
      {/* neighbour borders / coastlines */}
      <g fill="none" stroke="#a09070" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round">
        {map.outerPaths?.map((d, i) => (
          <path key={`o${i}`} d={d} vectorEffect="non-scaling-stroke" />
        ))}
      </g>
      {/* focused-country fill (tint) — opacity cross-fades during the pan */}
      {countryFillD && (
        <path d={countryFillD} fill={map.mainFill} stroke="none" opacity={tintOpacity} />
      )}
      {/* internal (state/région) borders */}
      <g fill="none" stroke="#a09070" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round">
        {map.statePaths?.map((d, i) => (
          <path key={`s${i}`} d={d} vectorEffect="non-scaling-stroke" />
        ))}
      </g>
      {/* country outer border */}
      {map.mainPath && (
        <path
          d={map.mainPath}
          fill="none"
          stroke="#8a7a60"
          strokeWidth="1.5"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      )}
    </g>
  );
}
