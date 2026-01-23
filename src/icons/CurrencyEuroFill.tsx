import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyEuroFillProps = Omit<IconBaseProps, 'children'>;

const CurrencyEuroFill = memo(
  forwardRef<SVGSVGElement, CurrencyEuroFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="currency-euro-fill" {...props}>
      <path fill="currentColor" d="M18 1.5a1.5 1.5 0 0 1 0 3h-2.5c-2.08 0-3.47.5-4.37 1.49A5.7 5.7 0 0 0 9.87 8.5H16a1.5 1.5 0 0 1 0 3H9.5v1H16a1.5 1.5 0 0 1 0 3H9.87c.3 1.15.74 1.95 1.26 2.51.9.98 2.3 1.49 4.37 1.49H18a1.5 1.5 0 0 1 0 3h-2.5c-2.53 0-4.89-.62-6.58-2.45A9 9 0 0 1 6.8 15.5H4a1.5 1.5 0 0 1 0-3h2.5v-1H4a1.5 1.5 0 0 1 0-3h2.8a9 9 0 0 1 2.12-4.55c1.7-1.83 4.05-2.45 6.58-2.45z" />
    </IconBase>
  ))
);

CurrencyEuroFill.displayName = 'CurrencyEuroFill';

// Triple export pattern (lucide-react style)
export { CurrencyEuroFill, CurrencyEuroFill as CurrencyEuroFillIcon, CurrencyEuroFill as SiCurrencyEuroFill };
export default CurrencyEuroFill;
export type { CurrencyEuroFillProps };
