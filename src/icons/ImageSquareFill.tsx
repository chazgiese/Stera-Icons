import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImageSquareFillProps = Omit<IconBaseProps, 'children'>;

const ImageSquareFill = memo(
  forwardRef<SVGSVGElement, ImageSquareFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="image-square-fill" {...props}>
      <path fill="currentColor" d="M15 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
        <path fill="currentColor" fillRule="evenodd" d="M13.6 3q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v3.2q.02 1.65-.06 2.7-.03.41-.1.8l.04.03-.2.58-.01.04-.06.18-.04.09-.1.2-.01.05a5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.07-2.71.06h-3.2q-1.65.01-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.28-2.4L3.42 18l-.06-.16-.02-.04a4 4 0 0 1-.18-.68L3.14 17Q3 16.14 3 15V10.4q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q8.75 2.99 10.4 3zm-3.2 2c-1.14 0-1.93 0-2.55.05-.6.05-.95.14-1.21.28a3 3 0 0 0-1.31 1.3 3 3 0 0 0-.28 1.22C5 8.47 5 9.26 5 10.4v2.19l1.5-1.51a2.1 2.1 0 0 1 3 0l3.75 3.76q.09.06.16 0l1.1-1.1a2.1 2.1 0 0 1 2.98 0l1.5 1.5.01-1.64v-3.2c0-1.14 0-1.93-.05-2.55a3 3 0 0 0-.28-1.21 3 3 0 0 0-1.3-1.31 3 3 0 0 0-1.22-.28C15.53 5 14.74 5 13.6 5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ImageSquareFill.displayName = 'ImageSquareFill';

// Triple export pattern (lucide-react style)
export { ImageSquareFill, ImageSquareFill as ImageSquareFillIcon, ImageSquareFill as SiImageSquareFill };
export default ImageSquareFill;
export type { ImageSquareFillProps };
