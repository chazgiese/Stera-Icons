import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BatteryHalfBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BatteryHalfBoldDuotone = memo(
  forwardRef<SVGSVGElement, BatteryHalfBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="battery-half-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M14.5 5.5q1.37-.01 2.27.05.9.04 1.68.4a4.5 4.5 0 0 1 2.1 2.1c.22.45.32.93.38 1.45h.57c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5h-.57q-.07.78-.38 1.45a4.5 4.5 0 0 1-2.1 2.1q-.77.36-1.68.4-.9.06-2.27.05h-7q-1.37.01-2.27-.05a5 5 0 0 1-1.68-.4 4.5 4.5 0 0 1-2.1-2.1 5 5 0 0 1-.4-1.68Q.99 13.37 1 12q-.01-1.37.05-2.27.04-.9.4-1.68a4.5 4.5 0 0 1 2.1-2.1 5 5 0 0 1 1.68-.4q.9-.06 2.27-.05zm-7 2c-.95 0-1.6 0-2.11.04s-.77.11-.97.2a2.5 2.5 0 0 0-1.17 1.18c-.1.2-.17.47-.21.97S3 11.05 3 12s0 1.6.04 2.11.11.77.2.98c.25.5.67.92 1.18 1.16.2.1.47.17.97.21s1.16.04 2.11.04h7c.95 0 1.6 0 2.11-.04s.77-.11.98-.2a2.5 2.5 0 0 0 1.16-1.18c.1-.2.17-.47.21-.97S19 12.95 19 12s0-1.6-.04-2.11-.11-.77-.2-.97a2.5 2.5 0 0 0-1.18-1.17c-.2-.1-.47-.17-.97-.21s-1.16-.04-2.11-.04z" clipRule="evenodd" opacity={.4} />
        <path d="m10.2 8.5.4.01q.18 0 .42.08l.16.07.1.06q.3.2.5.5l.06.1.07.16q.07.24.08.41l.01.41v3.4l-.01.4q0 .24-.15.58a1.5 1.5 0 0 1-1.23.81l-.41.01H5.8l-.4-.01a1.5 1.5 0 0 1-1.38-1.38q-.03-.21-.02-.41v-3.4l.01-.4q0-.24.15-.58l.06-.1q.22-.36.6-.56l.16-.07q.24-.07.41-.08l.41-.01z" />
    </IconBase>
  ))
);

BatteryHalfBoldDuotone.displayName = 'BatteryHalfBoldDuotone';

// Triple export pattern (lucide-react style)
export { BatteryHalfBoldDuotone, BatteryHalfBoldDuotone as BatteryHalfBoldDuotoneIcon, BatteryHalfBoldDuotone as SiBatteryHalfBoldDuotone };
export default BatteryHalfBoldDuotone;
export type { BatteryHalfBoldDuotoneProps };
