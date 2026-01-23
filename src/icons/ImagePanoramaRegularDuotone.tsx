import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImagePanoramaRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ImagePanoramaRegularDuotone = memo(
  forwardRef<SVGSVGElement, ImagePanoramaRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="image-panorama-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M21.8 4.28a.75.75 0 0 1 .95.72v14a.75.75 0 0 1-.96.72 33.3 33.3 0 0 0-19.58 0 .75.75 0 0 1-.96-.72V5a.75.75 0 0 1 .96-.72 33.3 33.3 0 0 0 19.58 0m-.55 1.7a34.4 34.4 0 0 1-18.5 0v12.04a34.4 34.4 0 0 1 18.5 0z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M4.26 10.18c.69-.69 1.8-.69 2.48 0l3.58 3.58c.1.1.26.1.36 0l1.58-1.58c.69-.69 1.8-.69 2.48 0l5.61 5.61q-1.35-.33-2.67-.55l-4-4a.25.25 0 0 0-.36 0l-1.58 1.58c-.69.69-1.8.69-2.48 0l-3.58-3.58a.25.25 0 0 0-.36 0L2.75 13.8V11.7zM18 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

ImagePanoramaRegularDuotone.displayName = 'ImagePanoramaRegularDuotone';

// Triple export pattern (lucide-react style)
export { ImagePanoramaRegularDuotone, ImagePanoramaRegularDuotone as ImagePanoramaRegularDuotoneIcon, ImagePanoramaRegularDuotone as SiImagePanoramaRegularDuotone };
export default ImagePanoramaRegularDuotone;
export type { ImagePanoramaRegularDuotoneProps };
