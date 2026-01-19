import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ImagePanoramaBoldProps = Omit<IconBaseProps, 'children'>;

const ImagePanoramaBold = memo(
  forwardRef<SVGSVGElement, ImagePanoramaBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="image-panorama-bold" {...props}>
      <path fill="currentColor" d="M18 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fill="currentColor" fillRule="evenodd" d="M21.73 4.04A1 1 0 0 1 23 5v14a1 1 0 0 1-1.27.96 33 33 0 0 0-19.46 0A1 1 0 0 1 1 19V4.88a1 1 0 0 1 1.27-.84 33 33 0 0 0 19.46 0M3 13.9v3.78a34 34 0 0 1 13.96-.82l-3.46-3.46L11.91 15a2 2 0 0 1-2.82 0L5.5 11.41zm18-7.6a34.5 34.5 0 0 1-18 0v4.78L4.09 10a2 2 0 0 1 2.82 0l3.59 3.59L12.09 12a2 2 0 0 1 2.82 0l5.57 5.56.52.13z" clipRule="evenodd" />
    </IconBase>
  ))
);

ImagePanoramaBold.displayName = 'ImagePanoramaBold';

// Triple export pattern (lucide-react style)
export { ImagePanoramaBold, ImagePanoramaBold as ImagePanoramaBoldIcon, ImagePanoramaBold as SiImagePanoramaBold };
export type { ImagePanoramaBoldProps };
