import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DeviceDesktopBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const DeviceDesktopBoldDuotone = memo(
  forwardRef<SVGSVGElement, DeviceDesktopBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="device-desktop-bold-duotone" {...props}>
      <path fill="currentColor" d="M16.07 17c.15 1.09.46 2.3.68 3.06.28.95-.42 1.94-1.44 1.94H8.69c-1.02 0-1.72-1-1.44-1.94.22-.76.53-1.97.68-3.06h2a21 21 0 0 1-.6 3h5.33c-.22-.82-.48-1.94-.6-3z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M18.56 2q.34 0 .64.03c.4.03.78.1 1.16.3a3 3 0 0 1 1.31 1.3c.2.39.27.78.3 1.17q.04.59.03 1.4v6.6q0 .81-.03 1.4c-.03.4-.1.78-.3 1.16a3 3 0 0 1-1.3 1.31c-.39.2-.78.27-1.17.3q-.59.04-1.4.03H6.2q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3a3 3 0 0 1-1.31-1.3c-.2-.39-.27-.78-.3-1.17q-.04-.59-.03-1.4V6.2q0-.81.03-1.4c.03-.4.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3Q5.4 1.99 6.2 2h12.36M6.2 4c-.58 0-.95 0-1.23.02-.27.03-.37.06-.42.09a1 1 0 0 0-.44.44c-.03.05-.06.15-.09.42C4 5.25 4 5.62 4 6.2v6.6c0 .58 0 .95.02 1.23.03.27.06.37.09.42a1 1 0 0 0 .44.44c.05.03.15.06.42.09.28.02.65.02 1.23.02h11.6c.58 0 .95 0 1.23-.02.27-.03.37-.06.42-.09a1 1 0 0 0 .44-.44c.03-.05.06-.15.09-.42.02-.28.02-.65.02-1.23V6.2c0-.58 0-.95-.02-1.23a1 1 0 0 0-.09-.42 1 1 0 0 0-.44-.44 1 1 0 0 0-.42-.09l-.5-.02H6.2" clipRule="evenodd" />
    </IconBase>
  ))
);

DeviceDesktopBoldDuotone.displayName = 'DeviceDesktopBoldDuotone';

// Triple export pattern (lucide-react style)
export { DeviceDesktopBoldDuotone, DeviceDesktopBoldDuotone as DeviceDesktopBoldDuotoneIcon, DeviceDesktopBoldDuotone as SiDeviceDesktopBoldDuotone };
export default DeviceDesktopBoldDuotone;
export type { DeviceDesktopBoldDuotoneProps };
