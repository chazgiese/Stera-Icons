import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyDollarFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CurrencyDollarFillDuotone = memo(
  forwardRef<SVGSVGElement, CurrencyDollarFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="currency-dollar-fill-duotone" {...props}>
      <path d="M13.5 21a1.5 1.5 0 0 1-3 0v-2h3zM13.5 13.5V16h-3v-2.5zM13.5 10.5h-3V8h3zM12 1.5c.83 0 1.5.67 1.5 1.5v2h-3V3c0-.83.67-1.5 1.5-1.5" opacity={0.4} />
        <path fill="currentColor" d="M16.25 5a1.5 1.5 0 0 1 0 3h-6.5a1.25 1.25 0 0 0 0 2.5h4.75a4.25 4.25 0 0 1 0 8.5H7.25a1.5 1.5 0 0 1 0-3h7.25a1.25 1.25 0 1 0 0-2.5H9.75a4.25 4.25 0 0 1 0-8.5z" />
    </IconBase>
  ))
);

CurrencyDollarFillDuotone.displayName = 'CurrencyDollarFillDuotone';

// Triple export pattern (lucide-react style)
export { CurrencyDollarFillDuotone, CurrencyDollarFillDuotone as CurrencyDollarFillDuotoneIcon, CurrencyDollarFillDuotone as SiCurrencyDollarFillDuotone };
export default CurrencyDollarFillDuotone;
export type { CurrencyDollarFillDuotoneProps };
