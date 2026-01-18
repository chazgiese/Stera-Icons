import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CurrencyEuroRegularProps = Omit<IconBaseProps, 'children'>;

const CurrencyEuroRegular = memo(
  forwardRef<SVGSVGElement, CurrencyEuroRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M18 2.25a.75.75 0 0 1 0 1.5h-2.5c-2.19 0-3.82.53-4.92 1.73a7 7 0 0 0-1.63 3.77H16a.75.75 0 0 1 0 1.5H8.79a20 20 0 0 0 0 2.5H16a.75.75 0 0 1 0 1.5H8.95a7 7 0 0 0 1.63 3.77c1.1 1.2 2.73 1.73 4.92 1.73H18a.75.75 0 0 1 0 1.5h-2.5c-2.41 0-4.53-.6-6.03-2.21q-1.58-1.7-2.03-4.79H4a.75.75 0 0 1 0-1.5h3.29a22 22 0 0 1 0-2.5H4a.75.75 0 0 1 0-1.5h3.44q.45-3.1 2.03-4.79c1.5-1.62 3.62-2.21 6.03-2.21z" />
    </IconBase>
  ))
);

CurrencyEuroRegular.displayName = 'CurrencyEuroRegular';

// Triple export pattern (lucide-react style)
export { CurrencyEuroRegular, CurrencyEuroRegular as CurrencyEuroRegularIcon, CurrencyEuroRegular as SiCurrencyEuroRegular };
export type { CurrencyEuroRegularProps };
