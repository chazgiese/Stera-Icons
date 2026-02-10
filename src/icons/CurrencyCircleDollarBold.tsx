import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyCircleDollarBoldProps = Omit<IconBaseProps, 'children'>;

const CurrencyCircleDollarBold = memo(
  forwardRef<SVGSVGElement, CurrencyCircleDollarBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="currency-circle-dollar-bold" {...props}>
      <path fill="currentColor" d="M11.75 5.25a1 1 0 0 1 1 1V7.5h1.75a1 1 0 1 1 0 2h-3.75a.75.75 0 0 0 0 1.5h3a2.75 2.75 0 1 1 0 5.5h-.5v1.25a1 1 0 1 1-2 0V16.5H9a1 1 0 1 1 0-2h4.75a.75.75 0 0 0 0-1.5h-3a2.75 2.75 0 1 1 0-5.5V6.25a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

CurrencyCircleDollarBold.displayName = 'CurrencyCircleDollarBold';

// Triple export pattern (lucide-react style)
export { CurrencyCircleDollarBold, CurrencyCircleDollarBold as CurrencyCircleDollarBoldIcon, CurrencyCircleDollarBold as SiCurrencyCircleDollarBold };
export default CurrencyCircleDollarBold;
export type { CurrencyCircleDollarBoldProps };
