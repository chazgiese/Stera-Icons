import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type QuoteBoldProps = Omit<IconBaseProps, 'children'>;

const QuoteBold = memo(
  forwardRef<SVGSVGElement, QuoteBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M7.5 6C9.6 6 11 7.97 11 10c0 2.34-.39 4.29-1.2 5.69A4.3 4.3 0 0 1 6 18a1 1 0 1 1 0-2c.85 0 1.54-.4 2.07-1.31q.21-.37.38-.84Q8 14 7.5 14C5.4 14 4 12.03 4 10s1.4-4 3.5-4m0 2C6.83 8 6 8.72 6 10s.83 2 1.5 2S9 11.28 9 10s-.83-2-1.5-2M16.5 6c2.1 0 3.5 1.97 3.5 4 0 2.34-.39 4.29-1.2 5.69A4.3 4.3 0 0 1 15 18a1 1 0 1 1 0-2c.85 0 1.54-.4 2.07-1.31q.21-.37.38-.84-.45.15-.95.15c-2.1 0-3.5-1.97-3.5-4s1.4-4 3.5-4m0 2c-.67 0-1.5.72-1.5 2s.83 2 1.5 2 1.5-.72 1.5-2-.83-2-1.5-2" clipRule="evenodd" />
    </IconBase>
  ))
);

QuoteBold.displayName = 'QuoteBold';

// Triple export pattern (lucide-react style)
export { QuoteBold, QuoteBold as QuoteBoldIcon, QuoteBold as SiQuoteBold };
export type { QuoteBoldProps };
