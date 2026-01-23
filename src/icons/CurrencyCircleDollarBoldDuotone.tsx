import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyCircleDollarBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CurrencyCircleDollarBoldDuotone = memo(
  forwardRef<SVGSVGElement, CurrencyCircleDollarBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="currency-circle-dollar-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M11.75 4.5a1 1 0 0 1 1 1V7h2a1 1 0 1 1 0 2h-4a1 1 0 1 0 0 2h3a3 3 0 1 1 0 6h-.5v1.5a1 1 0 1 1-2 0V17h-2.5a1 1 0 1 1 0-2h5a1 1 0 1 0 0-2h-3a3 3 0 1 1 0-6V5.5a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

CurrencyCircleDollarBoldDuotone.displayName = 'CurrencyCircleDollarBoldDuotone';

// Triple export pattern (lucide-react style)
export { CurrencyCircleDollarBoldDuotone, CurrencyCircleDollarBoldDuotone as CurrencyCircleDollarBoldDuotoneIcon, CurrencyCircleDollarBoldDuotone as SiCurrencyCircleDollarBoldDuotone };
export default CurrencyCircleDollarBoldDuotone;
export type { CurrencyCircleDollarBoldDuotoneProps };
