import { Children, type CSSProperties, type ReactNode } from 'react';
import { useWordRevealScroll } from '../hooks/useWordRevealScroll';

function renderWords(children: ReactNode): ReactNode {
  return Children.map(children, (child, ci) => {
    if (typeof child === 'string') {
      return child.split(/(\s+)/).map((tok, ti) => {
        if (tok === '') return null;
        if (tok.trim() === '') return tok;
        return (
          <span key={`${ci}-${ti}`} className="wr-word" style={{ opacity: 0.13, transition: 'opacity .3s ease' }}>
            {tok}
          </span>
        );
      });
    }
    return child;
  });
}

interface WordRevealProps {
  as?: 'h1' | 'h2' | 'div' | 'span';
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

/**
 * Word-by-word scroll-linked title reveal ("Margaux" effect), applied to every h1/h2 (and the
 * "Los complejos" eyebrow label) across the site in the original.
 */
export function WordReveal({ as: Tag = 'h2', children, style, className }: WordRevealProps) {
  const ref = useWordRevealScroll<HTMLHeadingElement>();

  return (
    <Tag ref={ref} style={style} className={className}>
      {renderWords(children)}
    </Tag>
  );
}
