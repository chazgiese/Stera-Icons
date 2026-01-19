import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DeviceLaptopFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DeviceLaptopFillDuotone = memo(
  forwardRef<SVGSVGElement, DeviceLaptopFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="device-laptop-fill-duotone" {...props}>
      <path fill="currentColor" d="m21 14.91.18.35 1.31 3.27A1.8 1.8 0 0 1 20.82 21H3.18a1.8 1.8 0 0 1-1.67-2.47l1.31-3.27.18-.35V15a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1z" opacity={.4} />
        <path fill="currentColor" d="M16.8 3q.81 0 1.4.03c.4.03.78.1 1.16.3a3 3 0 0 1 1.31 1.3c.2.39.27.78.3 1.17q.04.59.03 1.4V15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7.2q0-.81.03-1.4c.03-.4.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3Q6.4 2.99 7.2 3z" />
    </IconBase>
  ))
);

DeviceLaptopFillDuotone.displayName = 'DeviceLaptopFillDuotone';

// Triple export pattern (lucide-react style)
export { DeviceLaptopFillDuotone, DeviceLaptopFillDuotone as DeviceLaptopFillDuotoneIcon, DeviceLaptopFillDuotone as SiDeviceLaptopFillDuotone };
export default DeviceLaptopFillDuotone;
export type { DeviceLaptopFillDuotoneProps };
