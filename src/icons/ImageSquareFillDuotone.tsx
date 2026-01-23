import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImageSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ImageSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, ImageSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="image-square-fill-duotone" {...props}>
      <path d="M7.63 21.93q.53.04 1.16.05h-.45zM15.66 21.97l-.45.01z" opacity={0.4} />
        <path fillRule="evenodd" d="M13 2q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v2q.02 2.05-.07 3.37a8 8 0 0 1-.23 1.41l-4.14-4.13-.11-.1a1.5 1.5 0 0 0-1.9 0l-.11.1-1.94 1.94-4.94-4.94a1.5 1.5 0 0 0-2-.1l-.12.1-4.12 4.12-.3.3Q2 14.17 2 13v-2q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35a6 6 0 0 1 2.63-2.63c.7-.35 1.46-.5 2.35-.58Q8.95 1.98 11 2zm2 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M17 9a2 2 0 1 0-4 0 2 2 0 0 0 4 0M6.55 10.54a1.5 1.5 0 0 1 2.01.1l4.94 4.95 1.94-1.94.11-.1a1.5 1.5 0 0 1 1.9 0l.11.1 4.14 4.14q-.13.48-.35.93a6 6 0 0 1-2.63 2.63c-.7.35-1.46.5-2.35.58q-1.3.09-3.32.07h-2.0999999999999996q-2.02.02-3.32-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35q-.04-.59-.06-1.3l.3-.3 4.13-4.12z" clipRule="evenodd" />
        <path fill="currentColor" d="M15 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
    </IconBase>
  ))
);

ImageSquareFillDuotone.displayName = 'ImageSquareFillDuotone';

// Triple export pattern (lucide-react style)
export { ImageSquareFillDuotone, ImageSquareFillDuotone as ImageSquareFillDuotoneIcon, ImageSquareFillDuotone as SiImageSquareFillDuotone };
export default ImageSquareFillDuotone;
export type { ImageSquareFillDuotoneProps };
