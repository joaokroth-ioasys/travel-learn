import { useState, useEffect } from 'react';

// Session-level cache so each article image is only fetched once per page load.
const wikiCache = new Map();

function fetchWikiImage(wikiTitle) {
  if (wikiCache.has(wikiTitle)) return Promise.resolve(wikiCache.get(wikiTitle));
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(wikiTitle)}`;
  return fetch(url)
    .then((r) => {
      if (!r.ok) throw new Error(`wiki ${r.status}`);
      return r.json();
    })
    .then((data) => {
      const src = data.originalimage?.source ?? data.thumbnail?.source ?? null;
      wikiCache.set(wikiTitle, src);
      return src;
    })
    .catch(() => { wikiCache.set(wikiTitle, null); return null; });
}

// Photo card backed by a Wikipedia article image. Classes live in CityPage.css
// (loaded globally by the parent CityPage).
export default function WikiPhoto({ photo, cityIcon, accentColor, darkAccent }) {
  // photo.src: use a fixed image URL directly. Otherwise resolve the article's
  // lead image via the Wikipedia API (photo.wikiTitle).
  // No src and no wikiTitle (e.g. City Life stages) → skip the fetch, show the
  // accent-gradient fallback with the stage icon.
  const [fetched, setFetched] = useState(
    () => photo.src ?? (photo.wikiTitle ? wikiCache.get(photo.wikiTitle) : null) ?? undefined,
  );

  useEffect(() => {
    if (photo.src || !photo.wikiTitle || fetched !== undefined) return; // direct URL, no article, or cached
    let cancelled = false;
    fetchWikiImage(photo.wikiTitle).then((s) => { if (!cancelled) setFetched(s); });
    return () => { cancelled = true; };
  }, [photo.src, photo.wikiTitle, fetched]);

  const src = photo.src ?? fetched;

  return (
    <figure className="city-page__photo-card">
      {src === undefined ? (
        <div className="city-page__photo-loading" aria-hidden="true" />
      ) : src ? (
        <img className="city-page__photo-img" src={src} alt={photo.alt} loading="lazy" />
      ) : (
        <div
          className="city-page__photo-fallback"
          style={{ background: `linear-gradient(135deg, ${accentColor}44, ${darkAccent}66)`, display: 'flex' }}
          aria-hidden="true"
        >
          <span>{cityIcon}</span>
        </div>
      )}
      <figcaption className="city-page__photo-caption">{photo.caption}</figcaption>
    </figure>
  );
}
