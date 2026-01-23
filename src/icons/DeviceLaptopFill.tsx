import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DeviceLaptopFillProps = Omit<IconBaseProps, 'children'>;

const DeviceLaptopFill = memo(
  forwardRef<SVGSVGElement, DeviceLaptopFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="device-laptop-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16.8 3q.81 0 1.4.03c.39.03.78.1 1.16.3a3 3 0 0 1 1.31 1.3c.2.39.27.78.3 1.17q.04.59.03 1.4v7.71l.18.35 1.2 3A2 2 0 0 1 20.52 21H3.48a2 2 0 0 1-1.86-2.74l1.2-3L3 14.9V7.2q0-.81.03-1.4c.03-.39.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3Q6.4 2.99 7.2 3zM3.48 19h17.04l-1.2-3H4.68z" clipRule="evenodd" />
    </IconBase>
  ))
);

DeviceLaptopFill.displayName = 'DeviceLaptopFill';

// Triple export pattern (lucide-react style)
export { DeviceLaptopFill, DeviceLaptopFill as DeviceLaptopFillIcon, DeviceLaptopFill as SiDeviceLaptopFill };
export default DeviceLaptopFill;
export type { DeviceLaptopFillProps };
