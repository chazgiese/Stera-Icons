import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CameraOffBoldProps = Omit<IconBaseProps, 'children'>;

const CameraOffBold = memo(
  forwardRef<SVGSVGElement, CameraOffBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="camera-off-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M3.3 3.3a1 1 0 0 1 1.4 0l17 17a1 1 0 1 1-1.4 1.4l-1.79-1.77q-.92.09-2.31.07H7.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q2 15.43 2 14.2v-2.75c0-.71 0-1.23.1-1.69A4 4 0 0 1 5.27 6.7L3.29 4.71a1 1 0 0 1 0-1.42M7.2 8.6l-.37.02c-.82 0-1.07 0-1.26.04a2 2 0 0 0-1.52 1.53c-.04.18-.05.43-.05 1.25v2.75c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h8.78l-2.32-2.33a3.5 3.5 0 0 1-4.93-4.93zm3.55 3.56a1.5 1.5 0 0 0 2.08 2.08z" clipRule="evenodd" />
        <path fill="currentColor" d="M13.74 4q.45-.01.89.1.46.15.85.45c.31.26.53.6.76.93l.7 1.02.09.12h.14c.72 0 1.24 0 1.69.1a4 4 0 0 1 3.05 3.04c.1.46.09.98.09 1.7v2.74c0 1.1 0 1.96-.12 2.63a1 1 0 0 1-1.97-.35c.09-.46.09-1.1.09-2.28v-2.75c0-.82 0-1.07-.05-1.25a2 2 0 0 0-1.52-1.53 7 7 0 0 0-1.26-.04q-.18 0-.41-.02a2 2 0 0 1-1.22-.64l-.25-.33-.7-1.03c-.3-.43-.34-.48-.37-.5l-.17-.09c-.03-.01-.1-.02-.61-.02h-2.88c-.52 0-.58.01-.61.02l-.09.04a1 1 0 1 1-.92-1.78A2.5 2.5 0 0 1 10.26 4z" />
    </IconBase>
  ))
);

CameraOffBold.displayName = 'CameraOffBold';

// Triple export pattern (lucide-react style)
export { CameraOffBold, CameraOffBold as CameraOffBoldIcon, CameraOffBold as SiCameraOffBold };
export default CameraOffBold;
export type { CameraOffBoldProps };
