import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type QuoteOpeningFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const QuoteOpeningFillDuotone = memo(
  forwardRef<SVGSVGElement, QuoteOpeningFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M18 6a1 1 0 1 1 0 2c-.85 0-1.54.4-2.07 1.31q-.21.36-.38.83.45-.14.95-.14c2.1 0 3.5 1.97 3.5 4s-1.4 4-3.5 4-3.5-1.97-3.5-4c0-2.34.39-4.29 1.2-5.69A4.3 4.3 0 0 1 18 6" opacity={.4} />
        <path fill="currentColor" d="M9 6a1 1 0 0 1 0 2c-.85 0-1.54.4-2.07 1.31q-.21.36-.38.83Q7 10 7.5 10c2.1 0 3.5 1.97 3.5 4s-1.4 4-3.5 4S4 16.03 4 14c0-2.34.39-4.29 1.2-5.69A4.3 4.3 0 0 1 9 6" />
    </IconBase>
  ))
);

QuoteOpeningFillDuotone.displayName = 'QuoteOpeningFillDuotone';

// Triple export pattern (lucide-react style)
export { QuoteOpeningFillDuotone, QuoteOpeningFillDuotone as QuoteOpeningFillDuotoneIcon, QuoteOpeningFillDuotone as SiQuoteOpeningFillDuotone };
export type { QuoteOpeningFillDuotoneProps };
