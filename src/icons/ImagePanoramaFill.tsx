import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImagePanoramaFillProps = Omit<IconBaseProps, 'children'>;

const ImagePanoramaFill = memo(
  forwardRef<SVGSVGElement, ImagePanoramaFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="image-panorama-fill" {...props}>
      <path d="M17 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fillRule="evenodd" d="M20.7 4.05A1 1 0 0 1 22 5v14a1 1 0 0 1-1.3.95 36 36 0 0 0-2.82-.77l-.21-.04q-.84-.19-1.66-.32a26 26 0 0 0-11.89.88l-.72.22-.1.03a1 1 0 0 1-.46.04A1 1 0 0 1 2 19V5a1 1 0 0 1 1.3-.95 26.8 26.8 0 0 0 17.4 0m-.7 2.3a28 28 0 0 1-16 0v3.74l.09-.09a2 2 0 0 1 2.82 0l3.59 3.59L12.09 12a2 2 0 0 1 2.82 0L20 17.09z" clipRule="evenodd" />
    </IconBase>
  ))
);

ImagePanoramaFill.displayName = 'ImagePanoramaFill';

// Triple export pattern (lucide-react style)
export { ImagePanoramaFill, ImagePanoramaFill as ImagePanoramaFillIcon, ImagePanoramaFill as SiImagePanoramaFill };
export default ImagePanoramaFill;
export type { ImagePanoramaFillProps };
