import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DeviceDesktopFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DeviceDesktopFillDuotone = memo(
  forwardRef<SVGSVGElement, DeviceDesktopFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M16.07 17c.15 1.09.46 2.3.68 3.06.28.95-.42 1.94-1.44 1.94H8.69c-1.02 0-1.72-1-1.44-1.94.22-.76.53-1.97.68-3.06z" opacity={.4} />
        <path fill="currentColor" d="M18.56 2q.34 0 .64.03c.4.03.78.1 1.16.3a3 3 0 0 1 1.31 1.3c.2.39.27.78.3 1.17q.04.59.03 1.4v6.6q0 .81-.03 1.4c-.03.4-.1.78-.3 1.16a3 3 0 0 1-1.3 1.31c-.39.2-.78.27-1.17.3q-.59.04-1.4.03H6.2q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3a3 3 0 0 1-1.31-1.3c-.2-.39-.27-.78-.3-1.17q-.04-.59-.03-1.4V6.2q0-.81.03-1.4c.03-.4.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3Q5.4 1.99 6.2 2h12.36" />
    </IconBase>
  ))
);

DeviceDesktopFillDuotone.displayName = 'DeviceDesktopFillDuotone';

// Triple export pattern (lucide-react style)
export { DeviceDesktopFillDuotone, DeviceDesktopFillDuotone as DeviceDesktopFillDuotoneIcon, DeviceDesktopFillDuotone as SiDeviceDesktopFillDuotone };
export type { DeviceDesktopFillDuotoneProps };
