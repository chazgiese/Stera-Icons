import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ImagePanoramaFillProps = Omit<IconBaseProps, 'children'>;

const ImagePanoramaFill = memo(
  forwardRef<SVGSVGElement, ImagePanoramaFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M18 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fill="currentColor" fillRule="evenodd" d="M21.73 4.04A1 1 0 0 1 23 5v14a1 1 0 0 1-1.27.96q-1.02-.28-1.99-.52a33 33 0 0 0-17.47.52A1 1 0 0 1 1 19V4.88a1 1 0 0 1 1.27-.84 33 33 0 0 0 19.46 0M21 6.3a34.5 34.5 0 0 1-18 0v4.78l1.62-1.62.1-.09c.48-.4 1.2-.37 1.66.09l4.12 4.12 2.12-2.12.1-.09a1.25 1.25 0 0 1 1.57 0l.1.09 6.09 6.1.52.13z" clipRule="evenodd" />
    </IconBase>
  ))
);

ImagePanoramaFill.displayName = 'ImagePanoramaFill';

export { ImagePanoramaFill };
export type { ImagePanoramaFillProps };
