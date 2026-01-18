import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ImagePanoramaRegularProps = Omit<IconBaseProps, 'children'>;

const ImagePanoramaRegular = memo(
  forwardRef<SVGSVGElement, ImagePanoramaRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M18 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fill="currentColor" fillRule="evenodd" d="M21.8 4.28a.75.75 0 0 1 .95.72v14a.75.75 0 0 1-.96.72 33.3 33.3 0 0 0-19.58 0 .75.75 0 0 1-.96-.72V5a.75.75 0 0 1 .96-.72 33.3 33.3 0 0 0 19.58 0M5.67 11.24a.25.25 0 0 0-.36 0L2.75 13.8v4.2a34 34 0 0 1 14.93-.77l-4-4a.25.25 0 0 0-.36 0l-1.58 1.58c-.69.69-1.8.69-2.48 0zm15.57-5.26a34.4 34.4 0 0 1-18.5 0v5.71l1.51-1.51c.69-.69 1.8-.69 2.48 0l3.58 3.58c.1.1.26.1.36 0l1.58-1.58c.69-.69 1.8-.69 2.48 0l5.61 5.61.9.23z" clipRule="evenodd" />
    </IconBase>
  ))
);

ImagePanoramaRegular.displayName = 'ImagePanoramaRegular';

export { ImagePanoramaRegular };
export type { ImagePanoramaRegularProps };
