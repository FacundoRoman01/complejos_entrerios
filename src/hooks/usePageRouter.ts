import { useEffect, useRef, useState } from 'react';
import type { PageId } from '../types';

/** Internal-state router (the original never used real URLs) — scrolls to top on page change. */
export function usePageRouter(initial: PageId = 'home') {
  const [page, setPage] = useState<PageId>(initial);
  const prevPage = useRef(page);

  useEffect(() => {
    if (prevPage.current !== page) {
      window.scrollTo(0, 0);
      prevPage.current = page;
    }
  }, [page]);

  const navigate = (p: PageId) => setPage(p);

  return {
    page,
    navigate,
    goHome: () => navigate('home'),
    goLoma: () => navigate('laloma'),
    goCande: () => navigate('cande'),
    goArandu: () => navigate('arandu'),
    goUnit: () => navigate('alojamiento'),
    goPromo: () => navigate('promociones'),
  };
}
