import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CameraOffFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CameraOffFillDuotone = memo(
  forwardRef<SVGSVGElement, CameraOffFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="camera-off-fill-duotone" {...props}>
      <path d="M9.5 10.92a3.25 3.25 0 0 0 4.57 4.57l4.44 4.44-.26.03q-.82.05-2.05.04H7.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q2 15.43 2 14.2v-2.75c0-.71 0-1.23.1-1.69A4 4 0 0 1 5.27 6.7zM13.74 4q.45-.01.89.1.46.15.85.45c.31.26.53.6.76.93l.7 1.02.09.12h.14c.72 0 1.24 0 1.69.1a4 4 0 0 1 3.05 3.04c.1.46.09.98.09 1.7v2.74q.01 1.23-.04 2.05-.06.78-.34 1.45L8.49 4.58l.03-.03A2.5 2.5 0 0 1 10.26 4z" opacity={0.4} />
        <path d="M3.3 3.3a1 1 0 0 1 1.4 0l17 17a1 1 0 1 1-1.4 1.4l-6.22-6.2a3.25 3.25 0 0 1-4.57-4.57L3.28 4.7a1 1 0 0 1 0-1.42" />
    </IconBase>
  ))
);

CameraOffFillDuotone.displayName = 'CameraOffFillDuotone';

// Triple export pattern (lucide-react style)
export { CameraOffFillDuotone, CameraOffFillDuotone as CameraOffFillDuotoneIcon, CameraOffFillDuotone as SiCameraOffFillDuotone };
export default CameraOffFillDuotone;
export type { CameraOffFillDuotoneProps };
