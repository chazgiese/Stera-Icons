import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyEuroFillProps = Omit<IconBaseProps, 'children'>;

const CurrencyEuroFill = memo(
  forwardRef<SVGSVGElement, CurrencyEuroFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="currency-euro-fill" {...props}>
      <path fill="currentColor" d="M17 2.5a1.5 1.5 0 0 1 0 3h-2.25c-1.85 0-3.06.45-3.83 1.28q-.58.58-.96 1.72H15a1.5 1.5 0 0 1 0 3H9.5v1H15a1.5 1.5 0 0 1 0 3H9.96q.38 1.14.96 1.72c.77.83 1.98 1.28 3.83 1.28H17a1.5 1.5 0 0 1 0 3h-2.25c-2.3 0-4.46-.55-6.02-2.22a8 8 0 0 1-1.88-3.78H5a1.5 1.5 0 0 1 0-3h1.5v-1H5a1.5 1.5 0 0 1 0-3h1.85q.51-2.3 1.88-3.78c1.56-1.67 3.73-2.22 6.02-2.22z" />
    </IconBase>
  ))
);

CurrencyEuroFill.displayName = 'CurrencyEuroFill';

// Triple export pattern (lucide-react style)
export { CurrencyEuroFill, CurrencyEuroFill as CurrencyEuroFillIcon, CurrencyEuroFill as SiCurrencyEuroFill };
export default CurrencyEuroFill;
export type { CurrencyEuroFillProps };
