import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyDollarBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CurrencyDollarBoldDuotone = memo(
  forwardRef<SVGSVGElement, CurrencyDollarBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="currency-dollar-bold-duotone" {...props}>
      <path d="M13 21a1 1 0 1 1-2 0v-2.5h2zM13 13v3.5h-2V13zM13 11h-2V7.5h2zM12 2a1 1 0 0 1 1 1v2.5h-2V3a1 1 0 0 1 1-1" opacity={0.4} />
        <path fill="currentColor" d="M16.25 5.5a1 1 0 1 1 0 2h-6.5a1.75 1.75 0 0 0 0 3.5h4.75a3.75 3.75 0 1 1 0 7.5H7.25a1 1 0 1 1 0-2h7.25a1.75 1.75 0 1 0 0-3.5H9.75a3.75 3.75 0 0 1 0-7.5z" />
    </IconBase>
  ))
);

CurrencyDollarBoldDuotone.displayName = 'CurrencyDollarBoldDuotone';

// Triple export pattern (lucide-react style)
export { CurrencyDollarBoldDuotone, CurrencyDollarBoldDuotone as CurrencyDollarBoldDuotoneIcon, CurrencyDollarBoldDuotone as SiCurrencyDollarBoldDuotone };
export default CurrencyDollarBoldDuotone;
export type { CurrencyDollarBoldDuotoneProps };
