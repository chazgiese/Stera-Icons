import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DevicePhoneFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DevicePhoneFillDuotone = memo(
  forwardRef<SVGSVGElement, DevicePhoneFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="device-phone-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.2 1q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v10.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H9.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q4 18.43 4 17.2V6.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q8.57 1 9.8 1zM11 5a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M13 5a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

DevicePhoneFillDuotone.displayName = 'DevicePhoneFillDuotone';

// Triple export pattern (lucide-react style)
export { DevicePhoneFillDuotone, DevicePhoneFillDuotone as DevicePhoneFillDuotoneIcon, DevicePhoneFillDuotone as SiDevicePhoneFillDuotone };
export type { DevicePhoneFillDuotoneProps };
