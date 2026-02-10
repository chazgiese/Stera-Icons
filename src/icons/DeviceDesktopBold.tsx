import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DeviceDesktopBoldProps = Omit<IconBaseProps, 'children'>;

const DeviceDesktopBold = memo(
  forwardRef<SVGSVGElement, DeviceDesktopBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="device-desktop-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.7 3q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v2.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.69.04-1.67.04c.13.92.4 1.85.62 2.49.32.95-.37 2.01-1.44 2.01H8.74a1.53 1.53 0 0 1-1.44-2.01c.21-.64.49-1.57.62-2.5q-.98 0-1.67-.03a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57q-.05-.82-.04-2.05V8.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q7.07 3 8.3 3zM9.94 17c-.11.91-.34 1.8-.55 2.5h5.22c-.21-.7-.44-1.59-.55-2.5zM8.3 5c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82A26 26 0 0 0 4.5 8.8v2.4c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h7.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V8.8c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C17.14 5 16.56 5 15.7 5z" clipRule="evenodd" />
    </IconBase>
  ))
);

DeviceDesktopBold.displayName = 'DeviceDesktopBold';

// Triple export pattern (lucide-react style)
export { DeviceDesktopBold, DeviceDesktopBold as DeviceDesktopBoldIcon, DeviceDesktopBold as SiDeviceDesktopBold };
export default DeviceDesktopBold;
export type { DeviceDesktopBoldProps };
