import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyCircleDollarFillProps = Omit<IconBaseProps, 'children'>;

const CurrencyCircleDollarFill = memo(
  forwardRef<SVGSVGElement, CurrencyCircleDollarFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="currency-circle-dollar-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m-.25 3.5a1 1 0 0 0-1 1V7a3 3 0 0 0 0 6h3a1 1 0 1 1 0 2h-5a1 1 0 1 0 0 2h2.5v1.5a1 1 0 1 0 2 0V17h.5a3 3 0 1 0 0-6h-3a1 1 0 1 1 0-2h4a1 1 0 1 0 0-2h-2V5.5a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

CurrencyCircleDollarFill.displayName = 'CurrencyCircleDollarFill';

// Triple export pattern (lucide-react style)
export { CurrencyCircleDollarFill, CurrencyCircleDollarFill as CurrencyCircleDollarFillIcon, CurrencyCircleDollarFill as SiCurrencyCircleDollarFill };
export default CurrencyCircleDollarFill;
export type { CurrencyCircleDollarFillProps };
