import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ImageSquareFillProps = Omit<IconBaseProps, 'children'>;

const ImageSquareFill = memo(
  forwardRef<SVGSVGElement, ImageSquareFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="image-square-fill" {...props}>
      <path fill="currentColor" d="M15 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
        <path fill="currentColor" fillRule="evenodd" d="M13 2q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v2q.02 2.05-.07 3.37a8 8 0 0 1-.23 1.41l.04.05-.26.62-.13.27a6 6 0 0 1-2.63 2.63c-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07h-2q-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.74-2.87l-.02-.04-.05-.13-.08-.24-.04-.1-.07-.27-.02-.06-.07-.35-.02-.13-.1-.8v-.1q-.03-.23-.03-.5l-.01-.2v-.05L2 15.08v-.01L2 13v-2q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35a6 6 0 0 1 2.63-2.63c.7-.35 1.46-.5 2.35-.58Q8.95 1.98 11 2zm-2 2c-1.42 0-2.42 0-3.2.06-.77.07-1.25.19-1.62.38a4 4 0 0 0-1.74 1.74c-.2.37-.31.85-.38 1.62C4 8.58 4 9.58 4 11v2.09l2.44-2.44.11-.1a1.5 1.5 0 0 1 2.01.1l4.94 4.94 1.94-1.94.11-.1a1.5 1.5 0 0 1 1.9 0l.11.1 2.39 2.38c.05-.76.05-1.72.05-3.03v-2c0-1.42 0-2.42-.06-3.2a4 4 0 0 0-.38-1.62 4 4 0 0 0-1.74-1.74c-.37-.2-.85-.31-1.62-.38C15.42 4 14.42 4 13 4z" clipRule="evenodd" />
    </IconBase>
  ))
);

ImageSquareFill.displayName = 'ImageSquareFill';

// Triple export pattern (lucide-react style)
export { ImageSquareFill, ImageSquareFill as ImageSquareFillIcon, ImageSquareFill as SiImageSquareFill };
export type { ImageSquareFillProps };
