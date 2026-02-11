import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BatteryLowFillProps = Omit<IconBaseProps, 'children'>;

const BatteryLowFill = memo(
  forwardRef<SVGSVGElement, BatteryLowFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="battery-low-fill" {...props}>
      <path fillRule="evenodd" d="M14.5 5.75q1.36-.01 2.25.05.89.04 1.6.37a4.3 4.3 0 0 1 1.98 1.99q.33.7.37 1.59h.8c.69 0 1.25.56 1.25 1.25v2c0 .69-.56 1.25-1.25 1.25h-.8q-.04.89-.37 1.6a4.3 4.3 0 0 1-1.99 1.98q-.7.33-1.6.37-.87.06-2.24.05h-7q-1.37.01-2.25-.05a4 4 0 0 1-1.6-.37 4.3 4.3 0 0 1-1.98-1.99q-.33-.7-.37-1.6-.06-.87-.05-2.24-.01-1.37.05-2.25.04-.89.37-1.6a4.3 4.3 0 0 1 1.99-1.98q.7-.33 1.6-.37.87-.06 2.24-.05zm-9 2.75C4.67 8.5 4 9.17 4 10v4a1.5 1.5 0 0 0 3 0v-4c0-.83-.67-1.5-1.5-1.5" clipRule="evenodd" />
    </IconBase>
  ))
);

BatteryLowFill.displayName = 'BatteryLowFill';

// Triple export pattern (lucide-react style)
export { BatteryLowFill, BatteryLowFill as BatteryLowFillIcon, BatteryLowFill as SiBatteryLowFill };
export default BatteryLowFill;
export type { BatteryLowFillProps };
