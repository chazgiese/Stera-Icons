import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImagePanoramaBoldProps = Omit<IconBaseProps, 'children'>;

const ImagePanoramaBold = memo(
  forwardRef<SVGSVGElement, ImagePanoramaBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="image-panorama-bold" {...props}>
      <path d="M17 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fillRule="evenodd" d="M20.7 4.05A1 1 0 0 1 22 5v14a1 1 0 0 1-1.3.95 26.8 26.8 0 0 0-17.4 0A1 1 0 0 1 2 19V5a1 1 0 0 1 1.3-.95 26.8 26.8 0 0 0 17.4 0M4 12.9v4.75a28 28 0 0 1 13.06-.69l-3.56-3.56L11.91 15a2 2 0 0 1-2.82 0L5.5 11.41zm16-6.57a28 28 0 0 1-16 0v3.75l.09-.09a2 2 0 0 1 2.82 0l3.59 3.59L12.09 12a2 2 0 0 1 2.82 0L20 17.09z" clipRule="evenodd" />
    </IconBase>
  ))
);

ImagePanoramaBold.displayName = 'ImagePanoramaBold';

// Triple export pattern (lucide-react style)
export { ImagePanoramaBold, ImagePanoramaBold as ImagePanoramaBoldIcon, ImagePanoramaBold as SiImagePanoramaBold };
export default ImagePanoramaBold;
export type { ImagePanoramaBoldProps };
