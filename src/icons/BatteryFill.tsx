import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BatteryFillProps = Omit<IconBaseProps, 'children'>;

const BatteryFill = memo(
  forwardRef<SVGSVGElement, BatteryFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="battery-fill" {...props}>
      <path d="M14.5 5.75q1.36-.01 2.25.05.89.04 1.6.37a4.3 4.3 0 0 1 1.98 1.99q.33.7.37 1.59h.8c.69 0 1.25.56 1.25 1.25v2c0 .69-.56 1.25-1.25 1.25h-.8q-.04.89-.37 1.6a4.3 4.3 0 0 1-1.99 1.98q-.7.33-1.6.37-.87.06-2.24.05h-7q-1.37.01-2.25-.05a4 4 0 0 1-1.6-.37 4.3 4.3 0 0 1-1.98-1.99q-.33-.7-.37-1.6-.06-.87-.05-2.24-.01-1.37.05-2.25.04-.89.37-1.6a4.3 4.3 0 0 1 1.99-1.98q.7-.33 1.6-.37.87-.06 2.24-.05z" />
    </IconBase>
  ))
);

BatteryFill.displayName = 'BatteryFill';

// Triple export pattern (lucide-react style)
export { BatteryFill, BatteryFill as BatteryFillIcon, BatteryFill as SiBatteryFill };
export default BatteryFill;
export type { BatteryFillProps };
