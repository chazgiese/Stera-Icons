import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ImagePileFillProps = Omit<IconBaseProps, 'children'>;

const ImagePileFill = memo(
  forwardRef<SVGSVGElement, ImagePileFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="image-pile-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M6.19 4.78a4 4 0 0 1 4.46-3.49l8.6 1.06.2.03a4 4 0 0 1 3.28 4.43l-1.05 8.6a4 4 0 0 1-2.94 3.37 4 4 0 0 1-3.35 2.87l-8.6 1.06a4 4 0 0 1-3.03-.87 4 4 0 0 1-1.4-2.41l-.03-.2-1.06-8.6a4 4 0 0 1 3.48-4.46L6.04 6zm2.53 9.68c-.98-.76-2.39-.59-3.15.39L4.04 16.8l.27 2.18.04.2a2 2 0 0 0 2.19 1.54l8.6-1.05.2-.04zM10.4 3.28a2 2 0 0 0-2.23 1.74l-.09.74 5.27-.65.2-.02a4 4 0 0 1 4.1 2.74q.11.36.16.76l.99 8a2 2 0 0 0 .9-1.42l1.05-8.6a2 2 0 0 0-1.54-2.2l-.2-.04zm1.52 6.32a1.84 1.84 0 1 0 .45 3.64 1.84 1.84 0 0 0-.45-3.64" clipRule="evenodd" />
    </IconBase>
  ))
);

ImagePileFill.displayName = 'ImagePileFill';

// Triple export pattern (lucide-react style)
export { ImagePileFill, ImagePileFill as ImagePileFillIcon, ImagePileFill as SiImagePileFill };
export default ImagePileFill;
export type { ImagePileFillProps };
