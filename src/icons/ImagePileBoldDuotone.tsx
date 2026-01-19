import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ImagePileBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ImagePileBoldDuotone = memo(
  forwardRef<SVGSVGElement, ImagePileBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="image-pile-bold-duotone" {...props}>
      <path fill="currentColor" d="M6.19 4.78a4 4 0 0 1 4.46-3.49l8.6 1.06a4 4 0 0 1 3.48 4.46l-1.05 8.6a4 4 0 0 1-2.94 3.37q.23-.75.13-1.58l-.08-.6a2 2 0 0 0 .9-1.43l1.06-8.6A2 2 0 0 0 19 4.32l-8.6-1.05a2 2 0 0 0-2.23 1.74l-.09.74L6.04 6z" opacity={.4} />
        <path fill="currentColor" d="M11.92 9.6a1.83 1.83 0 1 1 .44 3.64 1.83 1.83 0 0 1-.44-3.64" />
        <path fill="currentColor" fillRule="evenodd" d="M13.56 5.1a4 4 0 0 1 4.25 3.5l1.06 8.6a4 4 0 0 1-3.48 4.45l-8.6 1.06a4 4 0 0 1-4.43-3.28l-.03-.2-1.06-8.6a4 4 0 0 1 3.48-4.46l8.6-1.06zM8.13 16.53a1.06 1.06 0 0 0-1.48.18l-2.2 2.8a2 2 0 0 0 2.09 1.2l6-.73zM13.6 7.1 5 8.15a2 2 0 0 0-1.75 2.23l.8 6.42 1.02-1.32a3.06 3.06 0 0 1 4.29-.52l5.98 4.67a2 2 0 0 0 1.54-2.19l-1.05-8.6a2 2 0 0 0-2.03-1.76z" clipRule="evenodd" />
    </IconBase>
  ))
);

ImagePileBoldDuotone.displayName = 'ImagePileBoldDuotone';

// Triple export pattern (lucide-react style)
export { ImagePileBoldDuotone, ImagePileBoldDuotone as ImagePileBoldDuotoneIcon, ImagePileBoldDuotone as SiImagePileBoldDuotone };
export default ImagePileBoldDuotone;
export type { ImagePileBoldDuotoneProps };
