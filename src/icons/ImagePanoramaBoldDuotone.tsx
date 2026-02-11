import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImagePanoramaBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ImagePanoramaBoldDuotone = memo(
  forwardRef<SVGSVGElement, ImagePanoramaBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="image-panorama-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M20.7 4.05A1 1 0 0 1 22 5v14a1 1 0 0 1-1.3.95 26.8 26.8 0 0 0-17.4 0A1 1 0 0 1 2 19V5a1 1 0 0 1 1.3-.95 26.8 26.8 0 0 0 17.4 0m-.7 2.3a28 28 0 0 1-16 0v11.3a28 28 0 0 1 16 0z" clipRule="evenodd" opacity={.4} />
        <path d="M4.09 10a2 2 0 0 1 2.82 0l3.59 3.59L12.09 12a2 2 0 0 1 2.82 0L20 17.09v.57q-1.5-.41-2.94-.69l-3.56-3.56L11.91 15a2 2 0 0 1-2.82 0L5.5 11.41 4 12.91V10.1zM17 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

ImagePanoramaBoldDuotone.displayName = 'ImagePanoramaBoldDuotone';

// Triple export pattern (lucide-react style)
export { ImagePanoramaBoldDuotone, ImagePanoramaBoldDuotone as ImagePanoramaBoldDuotoneIcon, ImagePanoramaBoldDuotone as SiImagePanoramaBoldDuotone };
export default ImagePanoramaBoldDuotone;
export type { ImagePanoramaBoldDuotoneProps };
