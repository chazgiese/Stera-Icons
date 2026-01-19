import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CurrencyDollarFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CurrencyDollarFillDuotone = memo(
  forwardRef<SVGSVGElement, CurrencyDollarFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="currency-dollar-fill-duotone" {...props}>
      <path d="M13.5 22a1.5 1.5 0 0 1-3 0v-2.5h3zM13.5 13.5v3h-3v-3zM13.5 10.5h-3v-3h3zM12 .5c.83 0 1.5.67 1.5 1.5v2.5h-3V2c0-.83.67-1.5 1.5-1.5" opacity={0.4} />
        <path fill="currentColor" d="M17 4.5a1.5 1.5 0 0 1 0 3h-7a1.5 1.5 0 1 0 0 3h5a4.5 4.5 0 1 1 0 9H7a1.5 1.5 0 0 1 0-3h8a1.5 1.5 0 0 0 0-3h-5a4.5 4.5 0 1 1 0-9z" />
    </IconBase>
  ))
);

CurrencyDollarFillDuotone.displayName = 'CurrencyDollarFillDuotone';

// Triple export pattern (lucide-react style)
export { CurrencyDollarFillDuotone, CurrencyDollarFillDuotone as CurrencyDollarFillDuotoneIcon, CurrencyDollarFillDuotone as SiCurrencyDollarFillDuotone };
export default CurrencyDollarFillDuotone;
export type { CurrencyDollarFillDuotoneProps };
