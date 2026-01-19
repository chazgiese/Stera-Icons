import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ImagePanoramaFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ImagePanoramaFillDuotone = memo(
  forwardRef<SVGSVGElement, ImagePanoramaFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="image-panorama-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M21.73 4.04A1 1 0 0 1 23 5v14a1 1 0 0 1-1.27.96 33 33 0 0 0-19.46 0A1 1 0 0 1 1 19V4.88a1 1 0 0 1 1.27-.84 33 33 0 0 0 19.46 0M21 6.3a34.5 34.5 0 0 1-18 0v11.38a34.5 34.5 0 0 1 18 0z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M4.87 9.22a1 1 0 0 1 1.34.07l4.29 4.3 2.3-2.3.07-.07a1 1 0 0 1 1.34.07l6.27 6.27A34.4 34.4 0 0 0 3 17.7v-6.6l1.8-1.8zM18 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

ImagePanoramaFillDuotone.displayName = 'ImagePanoramaFillDuotone';

// Triple export pattern (lucide-react style)
export { ImagePanoramaFillDuotone, ImagePanoramaFillDuotone as ImagePanoramaFillDuotoneIcon, ImagePanoramaFillDuotone as SiImagePanoramaFillDuotone };
export type { ImagePanoramaFillDuotoneProps };
