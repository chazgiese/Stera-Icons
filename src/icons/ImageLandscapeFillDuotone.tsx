import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ImageLandscapeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ImageLandscapeFillDuotone = memo(
  forwardRef<SVGSVGElement, ImageLandscapeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="image-landscape-fill-duotone" {...props}>
      <path d="M17.74 20.98h-.35zM5.7 20.94q.4.03.9.04h-.34zM21.3 19.76l-.06.04z" opacity={0.4} />
        <path fillRule="evenodd" d="M15.6 3q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v3.2q.02 1.65-.06 2.7a5 5 0 0 1-.58 2.15l-4.8-4.8-.11-.1a1.5 1.5 0 0 0-1.9 0l-.11.1-1.94 1.94-4.94-4.94a1.5 1.5 0 0 0-2.12 0l-5.4 5.4Q1 15.04 1 13.6v-3.2q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q6.75 2.99 8.4 3zM15 7a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" opacity={0.4} />
        <path d="m1.15 17.04.01.08-.01-.1zM20.44 20.36l-.17.1.22-.12z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="m1.04 16.05.03.36a5 5 0 0 0 .47 1.86 5 5 0 0 0 2.19 2.19c.6.3 1.23.42 1.96.48q1.05.08 2.66.06h7.3q1.6.02 2.66-.06a5 5 0 0 0 1.96-.48 5 5 0 0 0 2.09-2.01l-4.8-4.8-.11-.1a1.5 1.5 0 0 0-1.9 0l-.11.1-1.94 1.94-4.94-4.94a1.5 1.5 0 0 0-2.12 0zM17 9a2 2 0 1 0-4 0 2 2 0 0 0 4 0" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M6.44 10.65a1.5 1.5 0 0 1 2.12 0l4.94 4.94 1.94-1.94.11-.1a1.5 1.5 0 0 1 1.9 0l.11.1 4.8 4.8a5 5 0 0 1-.51.74l-.02.02a5 5 0 0 1-1.56 1.25c-.6.3-1.23.42-1.96.48q-1.04.08-2.66.06h-7.3q-1.6.02-2.66-.06a5 5 0 0 1-1.96-.48 5 5 0 0 1-2.19-2.19q-.39-.79-.46-1.74l-.01-.12-.01-.1-.02-.26z" clipRule="evenodd" />
        <path fill="currentColor" d="M15 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
    </IconBase>
  ))
);

ImageLandscapeFillDuotone.displayName = 'ImageLandscapeFillDuotone';

// Triple export pattern (lucide-react style)
export { ImageLandscapeFillDuotone, ImageLandscapeFillDuotone as ImageLandscapeFillDuotoneIcon, ImageLandscapeFillDuotone as SiImageLandscapeFillDuotone };
export default ImageLandscapeFillDuotone;
export type { ImageLandscapeFillDuotoneProps };
