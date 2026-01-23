import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyEuroFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CurrencyEuroFillDuotone = memo(
  forwardRef<SVGSVGElement, CurrencyEuroFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="currency-euro-fill-duotone" {...props}>
      <path d="M6.5 12.5q.04 1.62.3 3H4a1.5 1.5 0 0 1 0-3zM16 12.5a1.5 1.5 0 0 1 0 3H9.87q-.3-1.2-.36-3zM6.8 8.5q-.25 1.38-.3 3H4a1.5 1.5 0 0 1 0-3zM16 8.5a1.5 1.5 0 0 1 0 3H9.5q.06-1.8.37-3z" opacity={0.4} />
        <path fill="currentColor" d="M18 1.5a1.5 1.5 0 0 1 0 3h-2.5c-2.08 0-3.47.5-4.37 1.49-.94 1-1.63 2.81-1.63 6.01s.7 5 1.63 6.01c.9.98 2.3 1.49 4.37 1.49H18a1.5 1.5 0 0 1 0 3h-2.5c-2.53 0-4.89-.62-6.58-2.45-1.66-1.8-2.42-4.5-2.42-8.05s.76-6.25 2.42-8.05c1.7-1.83 4.05-2.45 6.58-2.45z" />
    </IconBase>
  ))
);

CurrencyEuroFillDuotone.displayName = 'CurrencyEuroFillDuotone';

// Triple export pattern (lucide-react style)
export { CurrencyEuroFillDuotone, CurrencyEuroFillDuotone as CurrencyEuroFillDuotoneIcon, CurrencyEuroFillDuotone as SiCurrencyEuroFillDuotone };
export default CurrencyEuroFillDuotone;
export type { CurrencyEuroFillDuotoneProps };
