import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ImagePileRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ImagePileRegularDuotone = memo(
  forwardRef<SVGSVGElement, ImagePileRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M11.92 9.6a1.83 1.83 0 1 1 .44 3.64 1.83 1.83 0 0 1-.44-3.64" />
        <path fill="currentColor" fillRule="evenodd" d="M13.38 5.36a3.75 3.75 0 0 1 4.18 3.26l1.06 8.6a3.76 3.76 0 0 1-3.27 4.19l-8.6 1.05a3.75 3.75 0 0 1-4.18-3.26l-1.05-8.6a3.75 3.75 0 0 1 3.26-4.18zm-5.1 10.98a1.3 1.3 0 0 0-1.83.22l-2.28 2.92a2.25 2.25 0 0 0 2.4 1.5l6.6-.82zm5.29-9.5L4.97 7.9A2.25 2.25 0 0 0 3 10.41l.86 7.02 1.4-1.8a2.8 2.8 0 0 1 3.94-.47l6.07 4.74a2.25 2.25 0 0 0 1.85-2.5l-1.05-8.6a2.25 2.25 0 0 0-2.51-1.95" clipRule="evenodd" />
        <path fill="currentColor" d="M6.44 4.8a3.75 3.75 0 0 1 4.18-3.26l8.6 1.06a3.75 3.75 0 0 1 3.26 4.18l-1.05 8.6a3.75 3.75 0 0 1-2.9 3.2 4 4 0 0 0 .09-1.35l-.03-.24c.71-.3 1.25-.97 1.35-1.8L21 6.6a2.25 2.25 0 0 0-1.96-2.5l-8.6-1.06a2.25 2.25 0 0 0-2.51 1.96L7.8 6.04l-1.54.2z" opacity={.4} />
    </IconBase>
  ))
);

ImagePileRegularDuotone.displayName = 'ImagePileRegularDuotone';

// Triple export pattern (lucide-react style)
export { ImagePileRegularDuotone, ImagePileRegularDuotone as ImagePileRegularDuotoneIcon, ImagePileRegularDuotone as SiImagePileRegularDuotone };
export type { ImagePileRegularDuotoneProps };
