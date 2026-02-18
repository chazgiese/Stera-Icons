import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DeviceTabletFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DeviceTabletFillDuotone = memo(
  forwardRef<SVGSVGElement, DeviceTabletFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="device-tablet-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M15.2 1q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v10.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H8.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q3 18.43 3 17.2V6.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q7.57 1 8.8 1zM12 16a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" opacity={.4} />
        <path d="M13.5 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
    </IconBase>
  ))
);

DeviceTabletFillDuotone.displayName = 'DeviceTabletFillDuotone';

// Triple export pattern (lucide-react style)
export { DeviceTabletFillDuotone, DeviceTabletFillDuotone as DeviceTabletFillDuotoneIcon, DeviceTabletFillDuotone as SiDeviceTabletFillDuotone };
export default DeviceTabletFillDuotone;
export type { DeviceTabletFillDuotoneProps };
