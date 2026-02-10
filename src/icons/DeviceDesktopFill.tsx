import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DeviceDesktopFillProps = Omit<IconBaseProps, 'children'>;

const DeviceDesktopFill = memo(
  forwardRef<SVGSVGElement, DeviceDesktopFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="device-desktop-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.7 3.25q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v2.4q.01 1.24-.04 2.03a4 4 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.68.04-1.68.04c.11 1 .42 2.05.65 2.74.32.95-.37 2.01-1.44 2.01H8.74a1.53 1.53 0 0 1-1.44-2.01c.23-.7.53-1.75.65-2.74q-1 .01-1.68-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03V8.8q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04zM9.94 17c-.11.91-.34 1.8-.55 2.5h5.22c-.21-.7-.44-1.59-.55-2.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

DeviceDesktopFill.displayName = 'DeviceDesktopFill';

// Triple export pattern (lucide-react style)
export { DeviceDesktopFill, DeviceDesktopFill as DeviceDesktopFillIcon, DeviceDesktopFill as SiDeviceDesktopFill };
export default DeviceDesktopFill;
export type { DeviceDesktopFillProps };
