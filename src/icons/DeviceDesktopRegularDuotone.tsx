import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DeviceDesktopRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const DeviceDesktopRegularDuotone = memo(
  forwardRef<SVGSVGElement, DeviceDesktopRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="device-desktop-duotone" {...props}>
      <path fill="currentColor" d="M15.8 16.75c.11 1.03.43 2.12.66 2.82.27.8-.31 1.68-1.2 1.68H8.74c-.89 0-1.47-.88-1.2-1.68l.11-.36c.22-.68.46-1.59.55-2.46h1.51c-.1 1.11-.41 2.24-.65 3h5.88c-.24-.76-.55-1.89-.65-3z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M16.5 3.25q1.03-.01 1.7.04.7.03 1.28.31.92.5 1.42 1.42.28.59.31 1.28.05.67.04 1.7v4q.01 1.03-.04 1.7-.04.7-.31 1.28c-.32.6-.81 1.1-1.42 1.42q-.59.28-1.28.31-.67.05-1.7.04h-9q-1.03.01-1.7-.04a3 3 0 0 1-1.28-.31c-.6-.32-1.1-.81-1.42-1.42q-.28-.59-.31-1.28-.05-.67-.04-1.7V8q-.01-1.03.04-1.7.03-.7.31-1.28c.32-.6.81-1.1 1.42-1.42q.59-.28 1.28-.31.67-.05 1.7-.04zm-9 1.5c-.71 0-1.2 0-1.58.03-.37.03-.57.09-.71.16q-.5.26-.77.77c-.07.14-.13.34-.16.7-.03.39-.03.88-.03 1.59v4c0 .71 0 1.2.03 1.58.03.37.09.57.16.71q.26.5.77.77c.14.07.34.13.7.16.39.03.88.03 1.59.03h9c.71 0 1.2 0 1.58-.03.37-.03.57-.09.71-.16q.5-.27.77-.77c.07-.14.13-.34.16-.7.03-.39.03-.88.03-1.59V8c0-.71 0-1.2-.03-1.58a2 2 0 0 0-.16-.71q-.27-.5-.77-.77a2 2 0 0 0-.7-.16c-.39-.03-.88-.03-1.59-.03z" clipRule="evenodd" />
    </IconBase>
  ))
);

DeviceDesktopRegularDuotone.displayName = 'DeviceDesktopRegularDuotone';

// Triple export pattern (lucide-react style)
export { DeviceDesktopRegularDuotone, DeviceDesktopRegularDuotone as DeviceDesktopRegularDuotoneIcon, DeviceDesktopRegularDuotone as SiDeviceDesktopRegularDuotone };
export default DeviceDesktopRegularDuotone;
export type { DeviceDesktopRegularDuotoneProps };
