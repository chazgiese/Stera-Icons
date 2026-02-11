import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CameraRegularProps = Omit<IconBaseProps, 'children'>;

const CameraRegular = memo(
  forwardRef<SVGSVGElement, CameraRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="camera" {...props}>
      <path fillRule="evenodd" d="M12 9.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
        <path fillRule="evenodd" d="M13.74 4.25q.44-.01.81.1.43.13.77.4c.28.22.48.52.71.87l.7 1.03.11.14q.07.08.15.08h.18c.73 0 1.22 0 1.64.1a3.8 3.8 0 0 1 2.85 2.85c.1.42.09.9.09 1.63v2.75q.01 1.24-.04 2.03a4 4 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H7.8q-1.24.01-2.03-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03v-2.75c0-.73 0-1.21.09-1.63a3.8 3.8 0 0 1 2.85-2.86c.42-.09.9-.08 1.64-.08H7q.08-.01.15-.09l.02-.02.08-.12.7-1.03c.24-.35.44-.65.72-.87a2.3 2.3 0 0 1 1.58-.5zm-3.18 1.5c-.5 0-.6 0-.68.03a1 1 0 0 0-.26.14c-.07.05-.13.13-.42.55L8.5 7.5q-.1.15-.23.3-.43.46-1.06.56-.2.03-.38.02c-.81 0-1.1 0-1.31.05-.86.19-1.53.86-1.72 1.71-.05.22-.05.5-.05 1.31v2.75c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.34.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h8.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91v-2.75c0-.8 0-1.09-.05-1.3a2.3 2.3 0 0 0-1.72-1.72c-.22-.05-.5-.05-1.3-.05q-.2 0-.39-.02a1.8 1.8 0 0 1-1.06-.56q-.13-.15-.23-.3l-.7-1.03c-.3-.42-.35-.5-.42-.55a1 1 0 0 0-.26-.14 3 3 0 0 0-.68-.03z" clipRule="evenodd" />
    </IconBase>
  ))
);

CameraRegular.displayName = 'CameraRegular';

// Triple export pattern (lucide-react style)
export { CameraRegular, CameraRegular as CameraRegularIcon, CameraRegular as SiCameraRegular };
export default CameraRegular;
export type { CameraRegularProps };
