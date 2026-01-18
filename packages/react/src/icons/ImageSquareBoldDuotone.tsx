import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ImageSquareBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ImageSquareBoldDuotone = memo(
  forwardRef<SVGSVGElement, ImageSquareBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13 2q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v2q.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35a6 6 0 0 1-2.63 2.63c-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07h-2q-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35Q1.98 15.05 2 13v-2q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35a6 6 0 0 1 2.63-2.63c.7-.35 1.46-.5 2.35-.58Q8.95 1.98 11 2zm-2 2c-1.42 0-2.42 0-3.2.06-.77.07-1.25.19-1.62.38a4 4 0 0 0-1.74 1.74c-.2.37-.31.85-.38 1.62C4 8.58 4 9.58 4 11v2c0 1.42 0 2.42.06 3.2.07.77.19 1.25.38 1.62a4 4 0 0 0 1.74 1.74c.37.2.85.31 1.62.38.78.06 1.78.06 3.2.06h2c1.42 0 2.42 0 3.2-.06a4 4 0 0 0 1.62-.38 4 4 0 0 0 1.74-1.74c.2-.37.31-.85.38-1.62.06-.78.06-1.78.06-3.2v-2c0-1.42 0-2.42-.06-3.2a4 4 0 0 0-.38-1.62 4 4 0 0 0-1.74-1.74c-.37-.2-.85-.31-1.62-.38C15.42 4 14.42 4 13 4z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M5.9 11.18c.89-.88 2.31-.88 3.2 0l4.22 4.23c.1.1.26.1.36 0l1.23-1.23c.88-.88 2.3-.88 3.18 0l1.86 1.85-.01.17a4 4 0 0 1-.38 1.62l-.24.41-2.64-2.64a.25.25 0 0 0-.36 0l-1.23 1.23c-.88.88-2.3.88-3.18 0L7.68 12.6a.25.25 0 0 0-.36 0l-3.28 3.28A54 54 0 0 1 4 13.1zM15 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
    </IconBase>
  ))
);

ImageSquareBoldDuotone.displayName = 'ImageSquareBoldDuotone';

// Triple export pattern (lucide-react style)
export { ImageSquareBoldDuotone, ImageSquareBoldDuotone as ImageSquareBoldDuotoneIcon, ImageSquareBoldDuotone as SiImageSquareBoldDuotone };
export type { ImageSquareBoldDuotoneProps };
