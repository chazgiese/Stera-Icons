import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BatteryBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BatteryBoldDuotone = memo(
  forwardRef<SVGSVGElement, BatteryBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="battery-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M14.5 5.5q1.37-.01 2.27.05.9.04 1.68.4a4.5 4.5 0 0 1 2.1 2.1q.36.77.4 1.68.06.9.05 2.27.01 1.37-.05 2.27a5 5 0 0 1-.4 1.68 4.5 4.5 0 0 1-2.1 2.1q-.77.36-1.68.4-.9.06-2.27.05h-7q-1.37.01-2.27-.05a5 5 0 0 1-1.68-.4 4.5 4.5 0 0 1-2.1-2.1 5 5 0 0 1-.4-1.68Q.99 13.37 1 12q-.01-1.37.05-2.27.04-.9.4-1.68a4.5 4.5 0 0 1 2.1-2.1 5 5 0 0 1 1.68-.4q.9-.06 2.27-.05zm-7 2c-.95 0-1.6 0-2.11.04s-.77.11-.97.2a2.5 2.5 0 0 0-1.17 1.18c-.1.2-.17.47-.21.97S3 11.05 3 12s0 1.6.04 2.11.11.77.2.98c.25.5.67.92 1.18 1.16.2.1.47.17.97.21s1.16.04 2.11.04h7c.95 0 1.6 0 2.11-.04s.77-.11.98-.2a2.5 2.5 0 0 0 1.16-1.18c.1-.2.17-.47.21-.97S19 12.95 19 12s0-1.6-.04-2.11-.11-.77-.2-.97a2.5 2.5 0 0 0-1.18-1.17c-.2-.1-.47-.17-.97-.21s-1.16-.04-2.11-.04z" clipRule="evenodd" opacity={.4} />
        <path d="M21.5 9.5c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5h-.57l.02-.23q.06-.9.05-2.27.01-1.37-.05-2.27l-.02-.23z" />
    </IconBase>
  ))
);

BatteryBoldDuotone.displayName = 'BatteryBoldDuotone';

// Triple export pattern (lucide-react style)
export { BatteryBoldDuotone, BatteryBoldDuotone as BatteryBoldDuotoneIcon, BatteryBoldDuotone as SiBatteryBoldDuotone };
export default BatteryBoldDuotone;
export type { BatteryBoldDuotoneProps };
