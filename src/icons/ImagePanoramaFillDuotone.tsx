import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImagePanoramaFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ImagePanoramaFillDuotone = memo(
  forwardRef<SVGSVGElement, ImagePanoramaFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="image-panorama-fill-duotone" {...props}>
      <path fill="currentColor" d="M4.09 10a2 2 0 0 1 2.82 0l3.59 3.59L12.09 12a2 2 0 0 1 2.82 0L22 19.08a1 1 0 0 1-1.3.87q-.48-.16-.95-.28l-.07-.02-.33-.1-.22-.06-.3-.08-.25-.06-.28-.07-.24-.06-.33-.07-.17-.04-.35-.07-.23-.05-.26-.05-.31-.05-.22-.04-.28-.04-.28-.05-.17-.02-.33-.04-.2-.03-.83-.08-.28-.02-1.14-.06h-.33999999999999997l-.28-.01h-.55l-.18.01-.83.04-.26.01-.29.03q-.12 0-.24.02l-.24.02-.29.03-1.05.14-.24.04-.76.13-.3.06-.31.07-.15.03-.66.15-.16.04-.11.03-.13.03-.92.24-.14.05-.4.11-.08.03-.47.14A1 1 0 0 1 2 19v-6.5a1 1 0 0 1 .3-.7zM17 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fill="currentColor" fillRule="evenodd" d="m21.96 19.29.04-.2L14.9 12a2 2 0 0 0-2.82 0l-1.59 1.59L6.91 10a2 2 0 0 0-2.82 0l-1.8 1.8a1 1 0 0 0-.29.7V5a1 1 0 0 1 1.3-.95 26.8 26.8 0 0 0 17.4 0A1 1 0 0 1 22 5v14a1 1 0 0 1-.04.29M17 8.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

ImagePanoramaFillDuotone.displayName = 'ImagePanoramaFillDuotone';

// Triple export pattern (lucide-react style)
export { ImagePanoramaFillDuotone, ImagePanoramaFillDuotone as ImagePanoramaFillDuotoneIcon, ImagePanoramaFillDuotone as SiImagePanoramaFillDuotone };
export default ImagePanoramaFillDuotone;
export type { ImagePanoramaFillDuotoneProps };
