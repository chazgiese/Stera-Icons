import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CameraOffRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CameraOffRegularDuotone = memo(
  forwardRef<SVGSVGElement, CameraOffRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="camera-off-duotone" {...props}>
      <path d="m7.28 8.34-.07.02q-.2.03-.38.02c-.81 0-1.1 0-1.31.05-.86.19-1.53.86-1.72 1.71-.05.22-.05.5-.05 1.31v2.75c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h9.38l1.42 1.41c-.62.1-1.4.09-2.4.09H7.8q-1.24.01-2.03-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03v-2.75c0-.73 0-1.21.09-1.63a3.75 3.75 0 0 1 3.49-2.93zM13.74 4.25q.44-.01.81.1.43.13.77.4c.28.22.48.52.71.87l.7 1.03.11.14q.07.08.15.08h.18c.73 0 1.22 0 1.64.1a3.8 3.8 0 0 1 2.85 2.85c.1.42.09.9.09 1.63v2.75c0 1.1 0 1.94-.11 2.59a.75.75 0 0 1-1.48-.27c.09-.48.09-1.15.09-2.32v-2.75c0-.8 0-1.09-.05-1.3a2.3 2.3 0 0 0-1.72-1.72c-.22-.05-.5-.05-1.3-.05q-.2 0-.39-.02a1.8 1.8 0 0 1-1.06-.56q-.13-.15-.23-.3l-.7-1.03c-.3-.42-.35-.5-.42-.55a1 1 0 0 0-.26-.14 3 3 0 0 0-.68-.03h-2.88c-.5 0-.6 0-.69.03l-.12.05a.75.75 0 0 1-.7-1.33 2.3 2.3 0 0 1 1.21-.25z" opacity={0.4} />
        <path d="M10.73 11.8A1.74 1.74 0 0 0 12 14.74c.47 0 .9-.18 1.2-.48l1.07 1.06A3.24 3.24 0 0 1 8.75 13c0-.88.35-1.68.92-2.27z" opacity={0.4} />
        <path d="M3.47 3.47c.3-.3.77-.3 1.06 0l17 17a.75.75 0 1 1-1.06 1.06l-17-17a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

CameraOffRegularDuotone.displayName = 'CameraOffRegularDuotone';

// Triple export pattern (lucide-react style)
export { CameraOffRegularDuotone, CameraOffRegularDuotone as CameraOffRegularDuotoneIcon, CameraOffRegularDuotone as SiCameraOffRegularDuotone };
export default CameraOffRegularDuotone;
export type { CameraOffRegularDuotoneProps };
