/** Smooth-scrolls to an element by id, offsetting for the fixed nav bar (matches original _scrollTo). */
export function scrollToId(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 70;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

export function scrollToTop(): void {
  window.scrollTo(0, 0);
}
