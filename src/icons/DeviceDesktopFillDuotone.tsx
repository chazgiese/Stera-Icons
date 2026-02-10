import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DeviceDesktopFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DeviceDesktopFillDuotone = memo(
  forwardRef<SVGSVGElement, DeviceDesktopFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="device-desktop-fill-duotone" {...props}>
      <path fill="currentColor" d="M15.8 16.75c.11 1.03.43 2.12.66 2.82.27.8-.31 1.68-1.2 1.68H8.74c-.89 0-1.47-.88-1.2-1.68l.11-.36c.22-.68.45-1.59.55-2.46z" opacity={.4} />
        <path fill="currentColor" d="M16.5 3.25q1.03-.01 1.7.04.7.03 1.28.31.92.5 1.42 1.42.28.59.31 1.28.05.67.04 1.7v4q.01 1.03-.04 1.7-.04.7-.31 1.28c-.32.6-.81 1.1-1.42 1.42q-.59.28-1.28.31-.67.05-1.7.04h-9q-1.03.01-1.7-.04a3 3 0 0 1-1.28-.31c-.6-.32-1.1-.81-1.42-1.42q-.28-.59-.31-1.28-.05-.67-.04-1.7V8q-.01-1.03.04-1.7.03-.7.31-1.28c.32-.6.81-1.1 1.42-1.42q.59-.28 1.28-.31.67-.05 1.7-.04z" />
    </IconBase>
  ))
);

DeviceDesktopFillDuotone.displayName = 'DeviceDesktopFillDuotone';

// Triple export pattern (lucide-react style)
export { DeviceDesktopFillDuotone, DeviceDesktopFillDuotone as DeviceDesktopFillDuotoneIcon, DeviceDesktopFillDuotone as SiDeviceDesktopFillDuotone };
export default DeviceDesktopFillDuotone;
export type { DeviceDesktopFillDuotoneProps };
