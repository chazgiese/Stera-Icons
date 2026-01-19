import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DeviceDesktopBoldProps = Omit<IconBaseProps, 'children'>;

const DeviceDesktopBold = memo(
  forwardRef<SVGSVGElement, DeviceDesktopBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="device-desktop-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16.2 2q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v3.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04h-.13c.15 1.09.46 2.3.68 3.06.28.95-.42 1.94-1.44 1.94H8.69c-1.02 0-1.72-1-1.44-1.94.22-.76.53-1.97.68-3.06H7.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q2 12.43 2 11.2V7.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q6.57 2 7.8 2zM9.94 17a21 21 0 0 1-.6 3h5.32c-.22-.82-.48-1.94-.6-3zM7.8 4c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82A26 26 0 0 0 4 7.8v3.4c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h8.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V7.8c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C17.64 4 17.06 4 16.2 4z" clipRule="evenodd" />
    </IconBase>
  ))
);

DeviceDesktopBold.displayName = 'DeviceDesktopBold';

// Triple export pattern (lucide-react style)
export { DeviceDesktopBold, DeviceDesktopBold as DeviceDesktopBoldIcon, DeviceDesktopBold as SiDeviceDesktopBold };
export type { DeviceDesktopBoldProps };
