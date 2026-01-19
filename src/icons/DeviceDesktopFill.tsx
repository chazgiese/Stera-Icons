import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DeviceDesktopFillProps = Omit<IconBaseProps, 'children'>;

const DeviceDesktopFill = memo(
  forwardRef<SVGSVGElement, DeviceDesktopFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="device-desktop-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16.2 2q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v3.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04h-.13c.15 1.09.46 2.3.68 3.06.28.95-.42 1.94-1.44 1.94H8.69c-1.02 0-1.72-1-1.44-1.94.22-.76.53-1.97.68-3.06H7.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q2 12.43 2 11.2V7.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q6.57 2 7.8 2zM9.94 17a21 21 0 0 1-.6 3h5.32c-.22-.82-.48-1.94-.6-3z" clipRule="evenodd" />
    </IconBase>
  ))
);

DeviceDesktopFill.displayName = 'DeviceDesktopFill';

// Triple export pattern (lucide-react style)
export { DeviceDesktopFill, DeviceDesktopFill as DeviceDesktopFillIcon, DeviceDesktopFill as SiDeviceDesktopFill };
export default DeviceDesktopFill;
export type { DeviceDesktopFillProps };
