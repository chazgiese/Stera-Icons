import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ImageStackBoldProps = Omit<IconBaseProps, 'children'>;

const ImageStackBold = memo(
  forwardRef<SVGSVGElement, ImageStackBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="image-stack-bold" {...props}>
      <path fill="currentColor" d="M12.5 10a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fill="currentColor" fillRule="evenodd" d="M16.71 2q.6.01 1.07.05a5 5 0 0 1 1.76.44 4.5 4.5 0 0 1 1.97 1.97q.39.8.44 1.76.06.94.05 2.38v2.8q.01 1.44-.05 2.38a5 5 0 0 1-.44 1.76 4.5 4.5 0 0 1-1.97 1.97c-.49.25-1.02.36-1.6.42-.07.6-.18 1.12-.43 1.61a4.5 4.5 0 0 1-1.97 1.97 5 5 0 0 1-1.76.44q-.94.06-2.38.05H8.6q-1.44.01-2.38-.05a5 5 0 0 1-1.76-.44 4.5 4.5 0 0 1-1.97-1.97 5 5 0 0 1-.44-1.76q-.04-.48-.04-1.07L2 15.4v-2.8q-.01-1.44.05-2.38a5 5 0 0 1 .44-1.76 4.5 4.5 0 0 1 1.97-1.97 4 4 0 0 1 1.6-.42q.07-.89.43-1.61a4.5 4.5 0 0 1 1.97-1.97 5 5 0 0 1 1.76-.44Q11.16 2 12.6 2h4.11M8.15 14.66a.5.5 0 0 0-.3 0h-.01l-.03.01-.15.12-.65.62-2.87 2.87q.06.22.13.36.37.73 1.1 1.1c.2.1.5.18 1.01.23.54.04 1.22.04 2.22.04h2.8c.95 0 1.62 0 2.15-.04L8.99 15.4a13 13 0 0 0-.8-.74l-.03-.01M8.6 8l-1.56.01c-.96.03-1.38.11-1.67.26a2.5 2.5 0 0 0-1.1 1.1c-.1.2-.18.5-.23 1.01C4 10.92 4 11.6 4 12.6v2.99l1.6-1.6q.42-.44.77-.74a2.5 2.5 0 0 1 2.4-.5c.35.1.62.3.86.5q.35.3.77.74l5.06 5.06q.16-.2.27-.42c.15-.3.23-.71.26-1.67L16 15.4v-2.8c0-1 0-1.68-.04-2.22-.05-.52-.13-.8-.23-1.01a2.5 2.5 0 0 0-1.1-1.1c-.2-.1-.5-.18-1.01-.23C13.08 8 12.4 8 11.4 8zm4-4c-1 0-1.68 0-2.22.04-.52.05-.8.13-1.01.23a2.5 2.5 0 0 0-1.1 1.1q-.12.21-.18.63h3.31q1.44-.01 2.38.05a5 5 0 0 1 1.76.44 4.5 4.5 0 0 1 1.97 1.97q.39.8.44 1.76.06.94.05 2.38v3.31q.42-.06.63-.18a2.5 2.5 0 0 0 1.1-1.1c.1-.2.18-.5.23-1.01.04-.54.04-1.22.04-2.22V8.6c0-1 0-1.68-.04-2.22-.05-.52-.13-.8-.23-1.01a2.5 2.5 0 0 0-1.1-1.1c-.2-.1-.5-.18-1.01-.23q-.4-.03-.94-.03L15.4 4z" clipRule="evenodd" />
    </IconBase>
  ))
);

ImageStackBold.displayName = 'ImageStackBold';

// Triple export pattern (lucide-react style)
export { ImageStackBold, ImageStackBold as ImageStackBoldIcon, ImageStackBold as SiImageStackBold };
export type { ImageStackBoldProps };
