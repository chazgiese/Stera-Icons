import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ImagePanoramaBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ImagePanoramaBoldDuotone = memo(
  forwardRef<SVGSVGElement, ImagePanoramaBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M21.73 4.04A1 1 0 0 1 23 5v14a1 1 0 0 1-1.27.96 33 33 0 0 0-19.46 0A1 1 0 0 1 1 19V4.88a1 1 0 0 1 1.27-.84 33 33 0 0 0 19.46 0M21 6.3a34.5 34.5 0 0 1-18 0v11.38a34.5 34.5 0 0 1 18 0z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M4.09 10a2 2 0 0 1 2.82 0l3.59 3.59L12.09 12a2 2 0 0 1 2.82 0l5.57 5.56q-1.8-.43-3.52-.69l-3.46-3.46L11.91 15a2 2 0 0 1-2.82 0L5.5 11.41 3 13.91V11.1zM18 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

ImagePanoramaBoldDuotone.displayName = 'ImagePanoramaBoldDuotone';

export { ImagePanoramaBoldDuotone };
export type { ImagePanoramaBoldDuotoneProps };
