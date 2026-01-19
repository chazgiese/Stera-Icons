import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CurrencyDollarRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CurrencyDollarRegularDuotone = memo(
  forwardRef<SVGSVGElement, CurrencyDollarRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="currency-dollar-duotone" {...props}>
      <path d="M12.75 22a.75.75 0 0 1-1.5 0v-3.25h1.5zM12.75 12.75v4.5h-1.5v-4.5zM12.75 11.25h-1.5v-4.5h1.5zM12 1.25c.41 0 .75.34.75.75v3.25h-1.5V2c0-.41.34-.75.75-.75" opacity={0.4} />
        <path fill="currentColor" d="M17 5.25a.75.75 0 0 1 0 1.5h-7a2.25 2.25 0 0 0 0 4.5h5a3.75 3.75 0 1 1 0 7.5H7a.75.75 0 0 1 0-1.5h8a2.25 2.25 0 0 0 0-4.5h-5a3.75 3.75 0 1 1 0-7.5z" />
    </IconBase>
  ))
);

CurrencyDollarRegularDuotone.displayName = 'CurrencyDollarRegularDuotone';

// Triple export pattern (lucide-react style)
export { CurrencyDollarRegularDuotone, CurrencyDollarRegularDuotone as CurrencyDollarRegularDuotoneIcon, CurrencyDollarRegularDuotone as SiCurrencyDollarRegularDuotone };
export type { CurrencyDollarRegularDuotoneProps };
