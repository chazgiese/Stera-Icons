import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyEuroFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CurrencyEuroFillDuotone = memo(
  forwardRef<SVGSVGElement, CurrencyEuroFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="currency-euro-fill-duotone" {...props}>
      <path d="M6.5 12.5q.05 1.65.35 3H5a1.5 1.5 0 0 1 0-3zM15 12.5a1.5 1.5 0 0 1 0 3H9.96q-.39-1.14-.45-3zM6.85 8.5q-.3 1.35-.34 3H5a1.5 1.5 0 0 1 0-3zM15 8.5a1.5 1.5 0 0 1 0 3H9.5q.06-1.86.46-3z" opacity={0.4} />
        <path d="M17 2.5a1.5 1.5 0 0 1 0 3h-2.25c-1.85 0-3.06.45-3.83 1.28-.8.85-1.42 2.4-1.42 5.22s.62 4.37 1.42 5.22c.77.83 1.98 1.28 3.83 1.28H17a1.5 1.5 0 0 1 0 3h-2.25c-2.3 0-4.46-.55-6.02-2.22C7.19 17.63 6.5 15.18 6.5 12s.69-5.63 2.23-7.28c1.56-1.67 3.73-2.22 6.02-2.22z" />
    </IconBase>
  ))
);

CurrencyEuroFillDuotone.displayName = 'CurrencyEuroFillDuotone';

// Triple export pattern (lucide-react style)
export { CurrencyEuroFillDuotone, CurrencyEuroFillDuotone as CurrencyEuroFillDuotoneIcon, CurrencyEuroFillDuotone as SiCurrencyEuroFillDuotone };
export default CurrencyEuroFillDuotone;
export type { CurrencyEuroFillDuotoneProps };
