import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyEuroRegularProps = Omit<IconBaseProps, 'children'>;

const CurrencyEuroRegular = memo(
  forwardRef<SVGSVGElement, CurrencyEuroRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="currency-euro" {...props}>
      <path fill="currentColor" d="M17 3.25a.75.75 0 0 1 0 1.5h-2.25c-1.96 0-3.4.47-4.38 1.51a6 6 0 0 0-1.38 2.99H15a.75.75 0 0 1 0 1.5H8.8a17 17 0 0 0 0 2.5H15a.75.75 0 0 1 0 1.5H8.99a6 6 0 0 0 1.38 2.99c.97 1.04 2.42 1.51 4.38 1.51H17a.75.75 0 0 1 0 1.5h-2.25c-2.18 0-4.1-.53-5.48-1.99a7.6 7.6 0 0 1-1.8-4.01H5a.75.75 0 0 1 0-1.5h2.3a19 19 0 0 1 0-2.5H5a.75.75 0 0 1 0-1.5h2.47q.45-2.55 1.8-4.01c1.37-1.46 3.3-1.99 5.48-1.99z" />
    </IconBase>
  ))
);

CurrencyEuroRegular.displayName = 'CurrencyEuroRegular';

// Triple export pattern (lucide-react style)
export { CurrencyEuroRegular, CurrencyEuroRegular as CurrencyEuroRegularIcon, CurrencyEuroRegular as SiCurrencyEuroRegular };
export default CurrencyEuroRegular;
export type { CurrencyEuroRegularProps };
