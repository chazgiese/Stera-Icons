import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type QuoteOpeningRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const QuoteOpeningRegularDuotone = memo(
  forwardRef<SVGSVGElement, QuoteOpeningRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18 6.25a.75.75 0 0 1 0 1.5c-.95 0-1.72.45-2.29 1.44q-.33.57-.56 1.4.6-.34 1.35-.34c1.92 0 3.25 1.81 3.25 3.75s-1.33 3.75-3.25 3.75-3.25-1.81-3.25-3.75c0-2.32.38-4.22 1.16-5.56A4 4 0 0 1 18 6.25m-1.5 5.5c-.84 0-1.75.87-1.75 2.25s.9 2.25 1.75 2.25c.84 0 1.75-.87 1.75-2.25s-.9-2.25-1.75-2.25" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M9 6.25a.75.75 0 0 1 0 1.5c-.95 0-1.72.45-2.29 1.44q-.33.57-.56 1.4.6-.34 1.35-.34c1.92 0 3.25 1.81 3.25 3.75s-1.33 3.75-3.25 3.75S4.25 15.94 4.25 14c0-2.32.38-4.22 1.16-5.56A4 4 0 0 1 9 6.25m-1.5 5.5c-.84 0-1.75.87-1.75 2.25s.9 2.25 1.75 2.25c.84 0 1.75-.87 1.75-2.25s-.9-2.25-1.75-2.25" clipRule="evenodd" />
    </IconBase>
  ))
);

QuoteOpeningRegularDuotone.displayName = 'QuoteOpeningRegularDuotone';

// Triple export pattern (lucide-react style)
export { QuoteOpeningRegularDuotone, QuoteOpeningRegularDuotone as QuoteOpeningRegularDuotoneIcon, QuoteOpeningRegularDuotone as SiQuoteOpeningRegularDuotone };
export type { QuoteOpeningRegularDuotoneProps };
