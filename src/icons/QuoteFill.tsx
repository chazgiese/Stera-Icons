import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type QuoteFillProps = Omit<IconBaseProps, 'children'>;

const QuoteFill = memo(
  forwardRef<SVGSVGElement, QuoteFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="quote-fill" {...props}>
      <path fill="currentColor" d="M7.5 6C9.6 6 11 7.97 11 10c0 2.34-.39 4.29-1.2 5.69A4.3 4.3 0 0 1 6 18a1 1 0 1 1 0-2c.85 0 1.54-.4 2.07-1.31q.21-.37.38-.84Q8 14 7.5 14C5.4 14 4 12.03 4 10s1.4-4 3.5-4M16.5 6c2.1 0 3.5 1.97 3.5 4 0 2.34-.39 4.29-1.2 5.69A4.3 4.3 0 0 1 15 18a1 1 0 1 1 0-2c.85 0 1.54-.4 2.07-1.31q.21-.37.38-.84-.45.15-.95.15c-2.1 0-3.5-1.97-3.5-4s1.4-4 3.5-4" />
    </IconBase>
  ))
);

QuoteFill.displayName = 'QuoteFill';

// Triple export pattern (lucide-react style)
export { QuoteFill, QuoteFill as QuoteFillIcon, QuoteFill as SiQuoteFill };
export default QuoteFill;
export type { QuoteFillProps };
