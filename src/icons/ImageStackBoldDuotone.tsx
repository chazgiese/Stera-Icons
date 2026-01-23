import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImageStackBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ImageStackBoldDuotone = memo(
  forwardRef<SVGSVGElement, ImageStackBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="image-stack-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.4 2h.05q1.4-.01 2.33.05a5 5 0 0 1 1.76.44 4.5 4.5 0 0 1 1.97 1.97q.38.8.44 1.76.06.94.05 2.38v2.8q.01 1.44-.05 2.38a5 5 0 0 1-.44 1.76 4.5 4.5 0 0 1-1.97 1.97q-.72.36-1.6.43v-.16q.07-.78.06-1.87.42-.06.63-.18a2.5 2.5 0 0 0 1.1-1.1c.1-.2.18-.5.23-1.01.04-.54.04-1.22.04-2.22V8.6c0-1 0-1.68-.04-2.22-.05-.52-.13-.8-.23-1.01a2.5 2.5 0 0 0-1.1-1.1c-.2-.1-.5-.18-1.01-.23C17.08 4 16.4 4 15.4 4h-2.8c-1 0-1.68 0-2.22.04-.52.05-.8.13-1.02.23a2.5 2.5 0 0 0-1.09 1.1q-.12.21-.18.63a25 25 0 0 0-2.03.06q.07-.88.43-1.6a4.5 4.5 0 0 1 1.97-1.97 5 5 0 0 1 1.76-.44Q11.15 2 12.55 2h2.85" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12.5 10a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fill="currentColor" fillRule="evenodd" d="M11.4 6q1.44-.01 2.38.05a5 5 0 0 1 1.76.44 4.5 4.5 0 0 1 1.97 1.97q.39.8.44 1.76.06.94.05 2.38v2.8q.01 1.44-.05 2.38a5 5 0 0 1-.44 1.76 4.5 4.5 0 0 1-1.97 1.97 5 5 0 0 1-1.76.44q-.94.06-2.38.05H8.6q-1.44.01-2.38-.05a5 5 0 0 1-1.76-.44 4.5 4.5 0 0 1-1.97-1.97 5 5 0 0 1-.44-1.76Q2 16.84 2 15.4v-2.8q-.01-1.44.05-2.38a5 5 0 0 1 .44-1.76 4.5 4.5 0 0 1 1.97-1.97 5 5 0 0 1 1.76-.44Q7.16 6 8.6 6zm-3.25 8.65a.5.5 0 0 0-.3 0h-.01l-.03.01-.15.12-.65.62-2.87 2.87q.06.22.13.36.37.73 1.1 1.1c.2.1.5.18 1.01.23.54.04 1.22.04 2.22.04h2.8c.95 0 1.62 0 2.15-.04L8.99 15.4a13 13 0 0 0-.8-.74l-.03-.01M8.6 8c-1 0-1.68 0-2.22.04-.52.05-.8.13-1.01.23a2.5 2.5 0 0 0-1.1 1.1c-.1.2-.18.5-.23 1.01C4 10.92 4 11.6 4 12.6v2.99l1.6-1.6q.42-.44.77-.74a2.5 2.5 0 0 1 2.4-.5c.35.1.62.3.86.5q.35.3.77.74l5.06 5.06q.16-.2.27-.42c.1-.2.18-.5.23-1.01.04-.54.04-1.22.04-2.22v-2.8c0-1 0-1.68-.04-2.22-.05-.52-.13-.8-.23-1.01a2.5 2.5 0 0 0-1.1-1.1c-.2-.1-.5-.18-1.01-.23C13.08 8 12.4 8 11.4 8z" clipRule="evenodd" />
    </IconBase>
  ))
);

ImageStackBoldDuotone.displayName = 'ImageStackBoldDuotone';

// Triple export pattern (lucide-react style)
export { ImageStackBoldDuotone, ImageStackBoldDuotone as ImageStackBoldDuotoneIcon, ImageStackBoldDuotone as SiImageStackBoldDuotone };
export default ImageStackBoldDuotone;
export type { ImageStackBoldDuotoneProps };
