import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyCircleDollarFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CurrencyCircleDollarFillDuotone = memo(
  forwardRef<SVGSVGElement, CurrencyCircleDollarFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="currency-circle-dollar-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m-.25 3.25a1 1 0 0 0-1 1V7.5a2.75 2.75 0 0 0 0 5.5h3a.75.75 0 0 1 0 1.5H9a1 1 0 1 0 0 2h2.25v1.25a1 1 0 1 0 2 0V16.5h.5a2.75 2.75 0 1 0 0-5.5h-3a.75.75 0 0 1 0-1.5h3.75a1 1 0 1 0 0-2h-1.75V6.25a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path d="M11.75 5.25a1 1 0 0 1 1 1V7.5h1.75a1 1 0 1 1 0 2h-3.75a.75.75 0 0 0 0 1.5h3a2.75 2.75 0 1 1 0 5.5h-.5v1.25a1 1 0 1 1-2 0V16.5H9a1 1 0 1 1 0-2h4.75a.75.75 0 0 0 0-1.5h-3a2.75 2.75 0 1 1 0-5.5V6.25a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

CurrencyCircleDollarFillDuotone.displayName = 'CurrencyCircleDollarFillDuotone';

// Triple export pattern (lucide-react style)
export { CurrencyCircleDollarFillDuotone, CurrencyCircleDollarFillDuotone as CurrencyCircleDollarFillDuotoneIcon, CurrencyCircleDollarFillDuotone as SiCurrencyCircleDollarFillDuotone };
export default CurrencyCircleDollarFillDuotone;
export type { CurrencyCircleDollarFillDuotoneProps };
