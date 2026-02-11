import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImageSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ImageSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, ImageSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="image-square-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M13.6 3q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v3.2q.02 1.65-.06 2.7-.03.41-.1.8l-.4-.4-2.95-2.95a2.1 2.1 0 0 0-2.98 0l-1.1 1.1a.1.1 0 0 1-.16 0L9.5 11.07a2.1 2.1 0 0 0-2.98 0l-3.22 3.21-.29.3V10.4q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q8.75 2.99 10.4 3zM15 7a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" opacity={.4} />
        <path d="M6.5 11.08a2.1 2.1 0 0 1 3 0l3.75 3.76q.09.06.16 0l1.1-1.1a2.1 2.1 0 0 1 2.98 0l2.95 2.96.44.43-.2.58q-.09.3-.22.56a5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1 .07-2.5.06H10.2q-1.5.02-2.5-.06a5 5 0 0 1-1.96-.48 5 5 0 0 1-2.19-2.19c-.45-.89-.52-1.92-.54-3.26v-.42l.3-.3zM15 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
    </IconBase>
  ))
);

ImageSquareFillDuotone.displayName = 'ImageSquareFillDuotone';

// Triple export pattern (lucide-react style)
export { ImageSquareFillDuotone, ImageSquareFillDuotone as ImageSquareFillDuotoneIcon, ImageSquareFillDuotone as SiImageSquareFillDuotone };
export default ImageSquareFillDuotone;
export type { ImageSquareFillDuotoneProps };
