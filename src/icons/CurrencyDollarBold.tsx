import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyDollarBoldProps = Omit<IconBaseProps, 'children'>;

const CurrencyDollarBold = memo(
  forwardRef<SVGSVGElement, CurrencyDollarBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="currency-dollar-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a1 1 0 0 1 1 1v2.5h3.25a1 1 0 1 1 0 2H13V11h1.5a3.75 3.75 0 1 1 0 7.5H13V21a1 1 0 1 1-2 0v-2.5H7.25a1 1 0 1 1 0-2H11V13H9.75a3.75 3.75 0 0 1 0-7.5H11V3a1 1 0 0 1 1-1m1 14.5h1.5a1.75 1.75 0 1 0 0-3.5H13zm-3.25-9a1.75 1.75 0 0 0 0 3.5H11V7.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

CurrencyDollarBold.displayName = 'CurrencyDollarBold';

// Triple export pattern (lucide-react style)
export { CurrencyDollarBold, CurrencyDollarBold as CurrencyDollarBoldIcon, CurrencyDollarBold as SiCurrencyDollarBold };
export default CurrencyDollarBold;
export type { CurrencyDollarBoldProps };
