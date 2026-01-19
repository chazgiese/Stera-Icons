import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ImageLandscapeBoldProps = Omit<IconBaseProps, 'children'>;

const ImageLandscapeBold = memo(
  forwardRef<SVGSVGElement, ImageLandscapeBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="image-landscape-bold" {...props}>
      <path fill="currentColor" d="M15 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
        <path fill="currentColor" fillRule="evenodd" d="M15.6 3q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v3.2q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06H8.4q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q.98 15.25 1 13.6v-3.2q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q6.75 2.99 8.4 3zm-7.92 9.6a.25.25 0 0 0-.36 0l-4.18 4.18q.06.36.19.58a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05h7.2c1.14 0 1.93 0 2.55-.05.6-.05.95-.14 1.21-.28l.25-.14-2.93-2.94a.25.25 0 0 0-.36 0l-1.23 1.23c-.88.88-2.3.88-3.18 0zM8.4 5c-1.14 0-1.93 0-2.55.05-.6.05-.95.14-1.21.28a3 3 0 0 0-1.31 1.3 3 3 0 0 0-.28 1.22C3 8.47 3 9.26 3 10.4v3.68l2.9-2.9c.89-.88 2.31-.88 3.2 0l4.22 4.23c.1.1.26.1.36 0l1.23-1.23c.88-.88 2.3-.88 3.18 0l2.74 2.74q.08-.3.12-.77c.05-.62.05-1.41.05-2.55v-3.2c0-1.14 0-1.93-.05-2.55a3 3 0 0 0-.28-1.21 3 3 0 0 0-1.3-1.31 3 3 0 0 0-1.22-.28C17.53 5 16.74 5 15.6 5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ImageLandscapeBold.displayName = 'ImageLandscapeBold';

// Triple export pattern (lucide-react style)
export { ImageLandscapeBold, ImageLandscapeBold as ImageLandscapeBoldIcon, ImageLandscapeBold as SiImageLandscapeBold };
export type { ImageLandscapeBoldProps };
