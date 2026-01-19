import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CurrencyCircleDollarFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CurrencyCircleDollarFillDuotone = memo(
  forwardRef<SVGSVGElement, CurrencyCircleDollarFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="currency-circle-dollar-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m-.25 3.5a1 1 0 0 0-1 1V7a3 3 0 0 0 0 6h3a1 1 0 1 1 0 2h-5a1 1 0 1 0 0 2h2.5v1.5a1 1 0 1 0 2 0V17h.5a3 3 0 1 0 0-6h-3a1 1 0 1 1 0-2h4a1 1 0 1 0 0-2h-2V5.5a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M11.75 4.5a1 1 0 0 1 1 1V7h2a1 1 0 1 1 0 2h-4a1 1 0 1 0 0 2h3a3 3 0 1 1 0 6h-.5v1.5a1 1 0 1 1-2 0V17h-2.5a1 1 0 1 1 0-2h5a1 1 0 1 0 0-2h-3a3 3 0 1 1 0-6V5.5a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

CurrencyCircleDollarFillDuotone.displayName = 'CurrencyCircleDollarFillDuotone';

// Triple export pattern (lucide-react style)
export { CurrencyCircleDollarFillDuotone, CurrencyCircleDollarFillDuotone as CurrencyCircleDollarFillDuotoneIcon, CurrencyCircleDollarFillDuotone as SiCurrencyCircleDollarFillDuotone };
export default CurrencyCircleDollarFillDuotone;
export type { CurrencyCircleDollarFillDuotoneProps };
