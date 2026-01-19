import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DeviceDesktopRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const DeviceDesktopRegularDuotone = memo(
  forwardRef<SVGSVGElement, DeviceDesktopRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="device-desktop-duotone" {...props}>
      <path fill="currentColor" d="M15.8 16.75c.12 1.18.48 2.56.72 3.38.23.8-.36 1.62-1.21 1.62H8.69c-.85 0-1.44-.83-1.2-1.62l.11-.41c.23-.83.5-1.97.6-2.97h1.51a21 21 0 0 1-.7 3.5h5.98c-.25-.88-.6-2.26-.7-3.5z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M17.8 2.25q.82 0 1.37.03.57.03 1.08.27.8.4 1.2 1.2.24.51.27 1.08.04.55.03 1.37v6.6q0 .82-.03 1.37-.03.57-.27 1.08-.4.8-1.2 1.2-.51.24-1.08.27-.55.04-1.37.03H6.2q-.82 0-1.37-.03a3 3 0 0 1-1.08-.27 2.8 2.8 0 0 1-1.2-1.2 3 3 0 0 1-.27-1.08q-.04-.55-.03-1.37V6.2q0-.82.03-1.37.03-.57.27-1.08.4-.8 1.2-1.2.51-.24 1.08-.27.55-.04 1.37-.03zM6.2 3.75c-.57 0-.96 0-1.25.02s-.43.07-.52.12q-.35.18-.54.54c-.05.1-.1.23-.12.52s-.02.68-.02 1.25v6.6c0 .57 0 .96.02 1.25s.07.43.12.52q.18.35.54.54c.1.05.23.1.52.12s.68.02 1.25.02h11.6q.84 0 1.25-.02c.29-.03.43-.07.52-.12q.35-.18.54-.54c.05-.1.1-.23.12-.52s.02-.68.02-1.25V6.2q0-.83-.02-1.25a1 1 0 0 0-.12-.52 1.3 1.3 0 0 0-.54-.54c-.1-.05-.23-.1-.52-.12s-.68-.02-1.25-.02z" clipRule="evenodd" />
    </IconBase>
  ))
);

DeviceDesktopRegularDuotone.displayName = 'DeviceDesktopRegularDuotone';

// Triple export pattern (lucide-react style)
export { DeviceDesktopRegularDuotone, DeviceDesktopRegularDuotone as DeviceDesktopRegularDuotoneIcon, DeviceDesktopRegularDuotone as SiDeviceDesktopRegularDuotone };
export type { DeviceDesktopRegularDuotoneProps };
