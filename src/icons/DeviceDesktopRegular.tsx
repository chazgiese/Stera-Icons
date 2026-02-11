import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DeviceDesktopRegularProps = Omit<IconBaseProps, 'children'>;

const DeviceDesktopRegular = memo(
  forwardRef<SVGSVGElement, DeviceDesktopRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="device-desktop" {...props}>
      <path fillRule="evenodd" d="M15.7 3.25q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v2.4q.01 1.24-.04 2.03a4 4 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.76.05-1.93.04c.11 1.03.43 2.12.66 2.82.27.8-.31 1.68-1.2 1.68H8.74c-.89 0-1.47-.88-1.2-1.68l.11-.36c.22-.68.45-1.6.55-2.46q-1.16.01-1.93-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03V8.8q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04zm-5.99 13.5c-.1 1.11-.41 2.24-.65 3h5.88c-.24-.76-.55-1.89-.65-3zm-1.41-12c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.65.35-.98.99c-.1.2-.17.46-.21.91-.04.46-.04 1.06-.04 1.91v2.4c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h7.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.35.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91V8.8c0-.85 0-1.45-.04-1.9a2 2 0 0 0-.2-.92 2.3 2.3 0 0 0-.99-.98 2 2 0 0 0-.91-.21c-.46-.04-1.06-.04-1.91-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

DeviceDesktopRegular.displayName = 'DeviceDesktopRegular';

// Triple export pattern (lucide-react style)
export { DeviceDesktopRegular, DeviceDesktopRegular as DeviceDesktopRegularIcon, DeviceDesktopRegular as SiDeviceDesktopRegular };
export default DeviceDesktopRegular;
export type { DeviceDesktopRegularProps };
