import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImagePanoramaRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ImagePanoramaRegularDuotone = memo(
  forwardRef<SVGSVGElement, ImagePanoramaRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="image-panorama-duotone" {...props}>
      <path fillRule="evenodd" d="M20.77 4.29a.75.75 0 0 1 .98.71v14a.75.75 0 0 1-.98.71 27 27 0 0 0-17.54 0 .75.75 0 0 1-.98-.71V5a.75.75 0 0 1 .98-.71 27 27 0 0 0 17.54 0M20.25 6a28 28 0 0 1-16.5 0v11.98a28 28 0 0 1 16.5 0z" clipRule="evenodd" opacity={.4} />
        <path d="M4.26 10.18c.69-.69 1.8-.69 2.48 0l3.58 3.58c.1.1.26.1.36 0l1.58-1.58c.69-.69 1.8-.69 2.48 0l5.51 5.5V18q-1.23-.36-2.43-.6l-4.14-4.15a.25.25 0 0 0-.36 0l-1.58 1.58c-.69.69-1.8.69-2.48 0l-3.58-3.58a.25.25 0 0 0-.36 0L3.75 12.8V10.7zM17 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

ImagePanoramaRegularDuotone.displayName = 'ImagePanoramaRegularDuotone';

// Triple export pattern (lucide-react style)
export { ImagePanoramaRegularDuotone, ImagePanoramaRegularDuotone as ImagePanoramaRegularDuotoneIcon, ImagePanoramaRegularDuotone as SiImagePanoramaRegularDuotone };
export default ImagePanoramaRegularDuotone;
export type { ImagePanoramaRegularDuotoneProps };
