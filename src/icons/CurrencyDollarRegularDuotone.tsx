import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyDollarRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CurrencyDollarRegularDuotone = memo(
  forwardRef<SVGSVGElement, CurrencyDollarRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="currency-dollar-duotone" {...props}>
      <path d="M12.75 21a.75.75 0 0 1-1.5 0v-2.75h1.5zM12.75 12.75v4h-1.5v-4zM12.75 11.25h-1.5v-4h1.5zM12 2.25c.41 0 .75.34.75.75v2.75h-1.5V3c0-.41.34-.75.75-.75" opacity={0.4} />
        <path fill="currentColor" d="M16.25 5.75a.75.75 0 0 1 0 1.5h-6.5a2 2 0 0 0 0 4h4.75a3.5 3.5 0 1 1 0 7H7.25a.75.75 0 0 1 0-1.5h7.25a2 2 0 1 0 0-4H9.75a3.5 3.5 0 0 1 0-7z" />
    </IconBase>
  ))
);

CurrencyDollarRegularDuotone.displayName = 'CurrencyDollarRegularDuotone';

// Triple export pattern (lucide-react style)
export { CurrencyDollarRegularDuotone, CurrencyDollarRegularDuotone as CurrencyDollarRegularDuotoneIcon, CurrencyDollarRegularDuotone as SiCurrencyDollarRegularDuotone };
export default CurrencyDollarRegularDuotone;
export type { CurrencyDollarRegularDuotoneProps };
