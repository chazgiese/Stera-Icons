import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CameraFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CameraFillDuotone = memo(
  forwardRef<SVGSVGElement, CameraFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="camera-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13.74 4q.45-.01.89.1.46.15.85.45c.31.26.53.6.76.93l.7 1.02.09.12h.14c.72 0 1.24 0 1.69.1a4 4 0 0 1 3.05 3.04c.1.46.09.98.09 1.7v2.74q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H7.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q2 15.43 2 14.2v-2.75c0-.71 0-1.23.1-1.69a4 4 0 0 1 3.04-3.04c.45-.1.97-.1 1.69-.1h.14l.09-.12.7-1.02c.23-.33.45-.67.76-.93A2.5 2.5 0 0 1 10.26 4zM12 9.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 9.75a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5" />
    </IconBase>
  ))
);

CameraFillDuotone.displayName = 'CameraFillDuotone';

// Triple export pattern (lucide-react style)
export { CameraFillDuotone, CameraFillDuotone as CameraFillDuotoneIcon, CameraFillDuotone as SiCameraFillDuotone };
export default CameraFillDuotone;
export type { CameraFillDuotoneProps };
