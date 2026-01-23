import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type QuoteOpeningBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const QuoteOpeningBoldDuotone = memo(
  forwardRef<SVGSVGElement, QuoteOpeningBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="quote-opening-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18 6a1 1 0 1 1 0 2c-.85 0-1.54.4-2.07 1.31q-.21.36-.38.83.45-.14.95-.14c2.1 0 3.5 1.97 3.5 4s-1.4 4-3.5 4-3.5-1.97-3.5-4c0-2.34.39-4.29 1.2-5.69A4.3 4.3 0 0 1 18 6m-1.5 6c-.67 0-1.5.72-1.5 2s.83 2 1.5 2 1.5-.72 1.5-2-.83-2-1.5-2" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M9 6a1 1 0 0 1 0 2c-.85 0-1.54.4-2.07 1.31q-.21.36-.38.83Q7 10 7.5 10c2.1 0 3.5 1.97 3.5 4s-1.4 4-3.5 4S4 16.03 4 14c0-2.34.39-4.29 1.2-5.69A4.3 4.3 0 0 1 9 6m-1.5 6c-.67 0-1.5.72-1.5 2s.83 2 1.5 2S9 15.28 9 14s-.83-2-1.5-2" clipRule="evenodd" />
    </IconBase>
  ))
);

QuoteOpeningBoldDuotone.displayName = 'QuoteOpeningBoldDuotone';

// Triple export pattern (lucide-react style)
export { QuoteOpeningBoldDuotone, QuoteOpeningBoldDuotone as QuoteOpeningBoldDuotoneIcon, QuoteOpeningBoldDuotone as SiQuoteOpeningBoldDuotone };
export default QuoteOpeningBoldDuotone;
export type { QuoteOpeningBoldDuotoneProps };
