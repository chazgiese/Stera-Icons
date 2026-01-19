import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CameraOffBoldProps = Omit<IconBaseProps, 'children'>;

const CameraOffBold = memo(
  forwardRef<SVGSVGElement, CameraOffBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="camera-off-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M1.8 1.8a1 1 0 0 1 1.4 0l20 20a1 1 0 1 1-1.4 1.4L19.58 21H6.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q1 16.43 1 15.2v-4.51c0-.6 0-1.03.06-1.4a4 4 0 0 1 3.55-3.27L1.79 3.21a1 1 0 0 1 0-1.42m4.47 6.18Q6 8 5.69 8c-.68 0-.9 0-1.05.03a2 2 0 0 0-1.6 1.61C3 9.8 3 10.01 3 10.7v4.51c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h10.79l-2.62-2.62a4.5 4.5 0 0 1-6.35-6.35l-2.1-2.1q-.12.04-.25.05m3.77 3.47a2.5 2.5 0 0 0 3.51 3.51z" clipRule="evenodd" />
        <path fill="currentColor" d="M13.29 3c.56 0 1.05-.01 1.51.13a3 3 0 0 1 1.03.55c.38.3.64.72.95 1.19l.32.48.2.3q.26.3.66.34l.35.01c.6 0 1.03 0 1.4.06a4 4 0 0 1 3.23 3.23c.06.37.06.8.06 1.4v7.06a1 1 0 0 1-2 0v-7.06c0-.68 0-.9-.03-1.05a2 2 0 0 0-1.61-1.6A7 7 0 0 0 18.3 8q-.31 0-.58-.02a3 3 0 0 1-1.95-1.05q-.17-.2-.34-.47l-.32-.48a4 4 0 0 0-.56-.75 1 1 0 0 0-.34-.19c-.1-.03-.24-.04-.93-.04H10.7c-.69 0-.82.01-.93.04a1 1 0 0 0-.34.19l-.02.01a1 1 0 1 1-1.26-1.56 3 3 0 0 1 1.04-.55c.46-.14.95-.13 1.51-.13z" />
    </IconBase>
  ))
);

CameraOffBold.displayName = 'CameraOffBold';

// Triple export pattern (lucide-react style)
export { CameraOffBold, CameraOffBold as CameraOffBoldIcon, CameraOffBold as SiCameraOffBold };
export type { CameraOffBoldProps };
