import type { FaqItem } from '../types';

export function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  return (
    <div>
      {faqs.map((f, i) => (
        <details key={i} style={{ borderTop: '1px solid rgba(195,177,132,0.22)', padding: '22px 0' }}>
          <summary
            style={{
              cursor: 'pointer',
              listStyle: 'none',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              gap: 20,
              fontFamily: "'Raleway',sans-serif",
              fontSize: 'clamp(20px,2.4vw,28px)',
              color: '#f4f1e6',
            }}
          >
            {f.q}
            <span style={{ color: '#c3b184', fontSize: 22 }}>+</span>
          </summary>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: '#c7cdb4', margin: '16px 0 0', maxWidth: 640, fontWeight: 300 }}>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
