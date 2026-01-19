import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DeviceDesktopRegularProps = Omit<IconBaseProps, 'children'>;

const DeviceDesktopRegular = memo(
  forwardRef<SVGSVGElement, DeviceDesktopRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="device-desktop" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16.2 2.25q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v3.4q.01 1.24-.04 2.03a4 4 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04h-.4c.12 1.18.48 2.56.72 3.38.23.8-.36 1.62-1.21 1.62H8.69c-.85 0-1.44-.83-1.2-1.62l.11-.41c.23-.83.5-1.97.6-2.97h-.4q-1.24.01-2.03-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03V7.8q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04zm-6.49 14.5a21 21 0 0 1-.7 3.5h5.98c-.25-.88-.6-2.26-.7-3.5zm-1.91-13c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.65.35-.98.99c-.1.2-.17.46-.21.91-.04.46-.04 1.06-.04 1.91v3.4c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h8.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.35.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91V7.8c0-.85 0-1.45-.04-1.9a2 2 0 0 0-.2-.92 2.3 2.3 0 0 0-.99-.98 2 2 0 0 0-.91-.21c-.46-.04-1.06-.04-1.91-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

DeviceDesktopRegular.displayName = 'DeviceDesktopRegular';

// Triple export pattern (lucide-react style)
export { DeviceDesktopRegular, DeviceDesktopRegular as DeviceDesktopRegularIcon, DeviceDesktopRegular as SiDeviceDesktopRegular };
export type { DeviceDesktopRegularProps };
