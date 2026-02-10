import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImagePanoramaRegularProps = Omit<IconBaseProps, 'children'>;

const ImagePanoramaRegular = memo(
  forwardRef<SVGSVGElement, ImagePanoramaRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="image-panorama" {...props}>
      <path fill="currentColor" d="M17 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fill="currentColor" fillRule="evenodd" d="M20.77 4.29a.75.75 0 0 1 .98.71v14a.75.75 0 0 1-.98.71 27 27 0 0 0-17.54 0 .75.75 0 0 1-.98-.71V5a.75.75 0 0 1 .98-.71 27 27 0 0 0 17.54 0m-15.1 6.95a.25.25 0 0 0-.35 0L3.75 12.8v5.18a28 28 0 0 1 14.07-.6l-4.14-4.15a.25.25 0 0 0-.36 0l-1.58 1.58c-.69.69-1.8.69-2.48 0zM20.26 6a28 28 0 0 1-16.5 0v4.68l.51-.51c.69-.69 1.8-.69 2.48 0l3.58 3.58c.1.1.26.1.36 0l1.58-1.58c.69-.69 1.8-.69 2.48 0l5.51 5.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ImagePanoramaRegular.displayName = 'ImagePanoramaRegular';

// Triple export pattern (lucide-react style)
export { ImagePanoramaRegular, ImagePanoramaRegular as ImagePanoramaRegularIcon, ImagePanoramaRegular as SiImagePanoramaRegular };
export default ImagePanoramaRegular;
export type { ImagePanoramaRegularProps };
