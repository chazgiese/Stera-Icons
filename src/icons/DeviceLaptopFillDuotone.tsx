import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DeviceLaptopFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DeviceLaptopFillDuotone = memo(
  forwardRef<SVGSVGElement, DeviceLaptopFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="device-laptop-fill-duotone" {...props}>
      <path d="m20.5 14.41.18.35 1.2 3a2 2 0 0 1-1.86 2.74H3.98a2 2 0 0 1-1.86-2.74l1.2-3 .18-.35v.09a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1z" opacity={.4} />
        <path d="M16.3 3.5q.81 0 1.4.03c.4.03.78.1 1.16.3a3 3 0 0 1 1.31 1.3c.2.39.27.78.3 1.17q.04.59.03 1.4v6.8a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1V7.7q0-.81.03-1.4c.03-.4.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3q.59-.04 1.4-.03z" />
    </IconBase>
  ))
);

DeviceLaptopFillDuotone.displayName = 'DeviceLaptopFillDuotone';

// Triple export pattern (lucide-react style)
export { DeviceLaptopFillDuotone, DeviceLaptopFillDuotone as DeviceLaptopFillDuotoneIcon, DeviceLaptopFillDuotone as SiDeviceLaptopFillDuotone };
export default DeviceLaptopFillDuotone;
export type { DeviceLaptopFillDuotoneProps };
