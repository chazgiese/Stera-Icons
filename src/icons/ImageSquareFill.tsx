import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImageSquareFillProps = Omit<IconBaseProps, 'children'>;

const ImageSquareFill = memo(
  forwardRef<SVGSVGElement, ImageSquareFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="image-square-fill" {...props}>
      <path d="M15 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
        <path fillRule="evenodd" d="M12.5 2.5q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v1q.02 2.05-.07 3.37a6 6 0 0 1-.5 2.18l-.02.05-.06.12a6 6 0 0 1-2.63 2.63c-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07h-1q-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.81-3.05l-.06-.16-.03-.1-.06-.2-.04-.13-.04-.2-.03-.1-.04-.22-.01-.1q-.06-.34-.09-.72v-.17l-.02-.19v-.05q-.06-1.2-.05-2.96v-1q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35a6 6 0 0 1 2.63-2.63c.7-.35 1.46-.5 2.35-.58q1.32-.09 3.37-.07zm-1 2c-1.42 0-2.42 0-3.2.06-.77.07-1.25.19-1.62.38a4 4 0 0 0-1.74 1.74c-.2.37-.31.85-.38 1.62-.06.78-.06 1.78-.06 3.2v1.58l2-2a2.1 2.1 0 0 1 3 0l3.75 3.76q.09.06.16 0l1.1-1.1a2.1 2.1 0 0 1 2.98 0l1.95 1.95c.06-.78.06-1.78.06-3.19v-1c0-1.42 0-2.42-.06-3.2a4 4 0 0 0-.38-1.62 4 4 0 0 0-1.74-1.74c-.37-.2-.85-.31-1.62-.38-.78-.06-1.78-.06-3.2-.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

ImageSquareFill.displayName = 'ImageSquareFill';

// Triple export pattern (lucide-react style)
export { ImageSquareFill, ImageSquareFill as ImageSquareFillIcon, ImageSquareFill as SiImageSquareFill };
export default ImageSquareFill;
export type { ImageSquareFillProps };
