import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ImagePileBoldProps = Omit<IconBaseProps, 'children'>;

const ImagePileBold = memo(
  forwardRef<SVGSVGElement, ImagePileBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="image-pile-bold" {...props}>
      <path fill="currentColor" d="M11.92 9.6a1.83 1.83 0 1 1 .44 3.64 1.83 1.83 0 0 1-.44-3.64" />
        <path fill="currentColor" fillRule="evenodd" d="M6.19 4.78a4 4 0 0 1 4.46-3.49l8.6 1.06a4 4 0 0 1 3.48 4.46l-1.05 8.6a4 4 0 0 1-2.94 3.37 4 4 0 0 1-3.35 2.87l-8.6 1.06a4 4 0 0 1-4.43-3.28l-.03-.2-1.06-8.6a4 4 0 0 1 3.48-4.46L6.04 6zm1.94 11.76a1.06 1.06 0 0 0-1.48.18l-2.2 2.8a2 2 0 0 0 2.09 1.2l6-.73zM13.6 7.1 5 8.15a2 2 0 0 0-1.75 2.23l.8 6.42 1.02-1.31a3.06 3.06 0 0 1 4.29-.53l5.98 4.67a2 2 0 0 0 1.54-2.19l-1.05-8.6a2 2 0 0 0-2.03-1.76zm-3.2-3.82a2 2 0 0 0-2.23 1.74l-.09.74 5.27-.65.2-.02a4 4 0 0 1 4.26 3.5l.99 8a2 2 0 0 0 .89-1.42l1.06-8.6A2 2 0 0 0 19 4.33z" clipRule="evenodd" />
    </IconBase>
  ))
);

ImagePileBold.displayName = 'ImagePileBold';

// Triple export pattern (lucide-react style)
export { ImagePileBold, ImagePileBold as ImagePileBoldIcon, ImagePileBold as SiImagePileBold };
export default ImagePileBold;
export type { ImagePileBoldProps };
