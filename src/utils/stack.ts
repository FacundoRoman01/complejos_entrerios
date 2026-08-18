import type { CSSProperties } from 'react';

/**
 * Site-wide "curtain reveal": every top-level section of a page is pinned via `position: sticky`
 * with an increasing z-index, so each section stays fixed while the next one slides over it.
 * Pass the section's 1-based order within its page.
 */
export function stackSection(order: number): CSSProperties {
  return { position: 'sticky', top: 0, zIndex: order };
}
