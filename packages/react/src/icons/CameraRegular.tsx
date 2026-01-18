import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CameraRegularProps = Omit<IconBaseProps, 'children'>;

const CameraRegular = memo(
  forwardRef<SVGSVGElement, CameraRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 8.75a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5m0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M13.29 3.25c.58 0 1.02 0 1.44.12q.52.16.95.5c.33.28.57.66.9 1.14l.31.48.22.32q.33.37.82.43l.38.01c.6 0 1.01 0 1.36.06a3.75 3.75 0 0 1 3.02 3.02c.06.35.06.75.06 1.36v4.51q.01 1.24-.04 2.03a4 4 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H6.8q-1.24.01-2.03-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03v-4.51c0-.6 0-1.01.06-1.36a3.75 3.75 0 0 1 3.02-3.02c.35-.06.75-.06 1.36-.06h.38q.5-.07.82-.44l.22-.32.32-.48c.32-.48.56-.86.9-1.13q.42-.35.94-.51c.42-.13.86-.12 1.44-.12zm-2.58 1.5c-.67 0-.85 0-1 .05q-.24.08-.43.23c-.13.1-.23.25-.6.81l-.33.48q-.17.28-.32.45c-.45.54-1.1.88-1.8.96q-.23.03-.54.02c-.67 0-.9 0-1.1.04-.91.16-1.64.89-1.8 1.8-.04.2-.04.43-.04 1.1v4.51c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h10.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.35.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91v-4.51c0-.67 0-.9-.04-1.1a2.25 2.25 0 0 0-1.8-1.8 7 7 0 0 0-1.1-.04q-.31 0-.55-.02a2.8 2.8 0 0 1-1.8-.96q-.15-.17-.31-.45l-.32-.48a4 4 0 0 0-.6-.8q-.2-.17-.44-.24a4 4 0 0 0-1-.05z" clipRule="evenodd" />
    </IconBase>
  ))
);

CameraRegular.displayName = 'CameraRegular';

// Triple export pattern (lucide-react style)
export { CameraRegular, CameraRegular as CameraRegularIcon, CameraRegular as SiCameraRegular };
export type { CameraRegularProps };
