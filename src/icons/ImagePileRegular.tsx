import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImagePileRegularProps = Omit<IconBaseProps, 'children'>;

const ImagePileRegular = memo(
  forwardRef<SVGSVGElement, ImagePileRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="image-pile" {...props}>
      <path d="M11.92 9.6a1.83 1.83 0 1 1 .44 3.64 1.83 1.83 0 0 1-.44-3.64" />
        <path fillRule="evenodd" d="M6.44 4.8a3.75 3.75 0 0 1 4.18-3.26l8.6 1.06a3.75 3.75 0 0 1 3.26 4.18l-1.05 8.6a3.75 3.75 0 0 1-2.89 3.2 3.75 3.75 0 0 1-3.18 2.83l-8.6 1.05a3.75 3.75 0 0 1-4.19-3.26l-1.05-8.6a3.75 3.75 0 0 1 3.26-4.18l1.48-.19zm1.84 11.54a1.3 1.3 0 0 0-1.83.22l-2.28 2.92a2.25 2.25 0 0 0 2.4 1.5l6.6-.82zm5.29-9.5L4.97 7.9A2.25 2.25 0 0 0 3 10.41l.86 7.02 1.4-1.8a2.8 2.8 0 0 1 3.94-.47l6.07 4.74c1.17-.2 2-1.3 1.85-2.5l-1.05-8.6a2.25 2.25 0 0 0-2.51-1.95m-3.14-3.81a2.25 2.25 0 0 0-2.5 1.96L7.8 6.04l5.59-.68a3.75 3.75 0 0 1 4.17 3.26L18.6 17c.71-.3 1.25-.97 1.35-1.8L21 6.6a2.25 2.25 0 0 0-1.96-2.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ImagePileRegular.displayName = 'ImagePileRegular';

// Triple export pattern (lucide-react style)
export { ImagePileRegular, ImagePileRegular as ImagePileRegularIcon, ImagePileRegular as SiImagePileRegular };
export default ImagePileRegular;
export type { ImagePileRegularProps };
