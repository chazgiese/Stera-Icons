import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DeviceDesktopBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const DeviceDesktopBoldDuotone = memo(
  forwardRef<SVGSVGElement, DeviceDesktopBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="device-desktop-bold-duotone" {...props}>
      <path d="M16.08 17c.13.92.4 1.85.62 2.49.32.95-.37 2.01-1.44 2.01H8.74a1.53 1.53 0 0 1-1.44-2.01c.21-.64.49-1.57.62-2.49h2.02c-.11.91-.34 1.8-.55 2.5h5.22c-.21-.7-.44-1.59-.55-2.5z" opacity={.4} />
        <path fillRule="evenodd" d="M16.5 3q1.02-.01 1.72.04c.48.04.94.12 1.37.34.66.34 1.2.87 1.53 1.53.22.43.3.89.34 1.37q.05.7.04 1.72v4q.01 1.03-.04 1.72c-.04.48-.12.94-.34 1.37a3.5 3.5 0 0 1-1.53 1.53c-.43.22-.89.3-1.37.34q-.7.05-1.72.04h-9q-1.03.01-1.72-.04a4 4 0 0 1-1.37-.34 3.5 3.5 0 0 1-1.53-1.53c-.22-.43-.3-.89-.34-1.37q-.05-.7-.04-1.72V8q-.01-1.03.04-1.72c.04-.48.12-.94.34-1.37a3.5 3.5 0 0 1 1.53-1.53c.43-.22.89-.3 1.37-.34q.7-.05 1.72-.04zm-9 2c-.72 0-1.2 0-1.56.03s-.52.08-.62.13a1.5 1.5 0 0 0-.66.66c-.05.1-.1.26-.13.62-.03.37-.03.84-.03 1.56v4c0 .72 0 1.2.03 1.56s.08.52.13.62q.23.43.66.66c.1.05.26.1.62.13.37.03.84.03 1.56.03h9c.72 0 1.2 0 1.56-.03s.52-.08.62-.13q.43-.23.66-.66c.05-.1.1-.26.13-.62.03-.37.03-.84.03-1.56V8c0-.72 0-1.2-.03-1.56a2 2 0 0 0-.13-.62 1.5 1.5 0 0 0-.66-.66c-.1-.05-.26-.1-.62-.13C17.7 5 17.22 5 16.5 5z" clipRule="evenodd" />
    </IconBase>
  ))
);

DeviceDesktopBoldDuotone.displayName = 'DeviceDesktopBoldDuotone';

// Triple export pattern (lucide-react style)
export { DeviceDesktopBoldDuotone, DeviceDesktopBoldDuotone as DeviceDesktopBoldDuotoneIcon, DeviceDesktopBoldDuotone as SiDeviceDesktopBoldDuotone };
export default DeviceDesktopBoldDuotone;
export type { DeviceDesktopBoldDuotoneProps };
