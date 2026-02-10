import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImageSquareBoldProps = Omit<IconBaseProps, 'children'>;

const ImageSquareBold = memo(
  forwardRef<SVGSVGElement, ImageSquareBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="image-square-bold" {...props}>
      <path fill="currentColor" d="M15 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
        <path fill="currentColor" fillRule="evenodd" d="M13.6 3q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v3.2q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06h-3.2q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q2.99 15.25 3 13.6v-3.2q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q8.75 2.99 10.4 3zm-5.52 9.5a.1.1 0 0 0-.16 0l-2.9 2.9q0 .41.03.75c.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05h3.2c1.14 0 1.93 0 2.55-.05.6-.05.95-.14 1.21-.28a3 3 0 0 0 1.17-1.06l-2.45-2.45a.1.1 0 0 0-.16 0l-1.1 1.1c-.82.82-2.15.82-2.98 0zM10.4 5c-1.14 0-1.93 0-2.55.05-.6.05-.95.14-1.21.28a3 3 0 0 0-1.31 1.3 3 3 0 0 0-.28 1.22C5 8.47 5 9.26 5 10.4v2.19l1.5-1.51a2.1 2.1 0 0 1 3 0l3.75 3.76q.09.06.16 0l1.1-1.1a2.1 2.1 0 0 1 2.98 0l1.5 1.5.01-1.64v-3.2c0-1.14 0-1.93-.05-2.55a3 3 0 0 0-.28-1.21 3 3 0 0 0-1.3-1.31 3 3 0 0 0-1.22-.28C15.53 5 14.74 5 13.6 5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ImageSquareBold.displayName = 'ImageSquareBold';

// Triple export pattern (lucide-react style)
export { ImageSquareBold, ImageSquareBold as ImageSquareBoldIcon, ImageSquareBold as SiImageSquareBold };
export default ImageSquareBold;
export type { ImageSquareBoldProps };
