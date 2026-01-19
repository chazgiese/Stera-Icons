import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ImageLandscapeFillProps = Omit<IconBaseProps, 'children'>;

const ImageLandscapeFill = memo(
  forwardRef<SVGSVGElement, ImageLandscapeFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="image-landscape-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.6 3q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v3.2q.02 1.65-.06 2.7a5 5 0 0 1-.63 2.24l-.01.02q-.16.26-.35.5l-.02.03-.4.46-.03.02-.2.18-.03.03-.22.18-.03.02q-.34.27-.75.48c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06H8.4q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q.98 15.25 1 13.6v-3.2q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q6.75 2.99 8.4 3zm-6.69 8a2 2 0 0 0-2.82 0L3 14.08c0 .89 0 1.54.05 2.07.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05h7.2c1.14 0 1.93 0 2.55-.05.6-.05.95-.14 1.21-.28a3 3 0 0 0 1.31-1.3q.1-.19.16-.45L17.91 14a2 2 0 0 0-2.82 0l-1.41 1.4c-.1.1-.26.1-.36 0zM15 7a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" />
    </IconBase>
  ))
);

ImageLandscapeFill.displayName = 'ImageLandscapeFill';

// Triple export pattern (lucide-react style)
export { ImageLandscapeFill, ImageLandscapeFill as ImageLandscapeFillIcon, ImageLandscapeFill as SiImageLandscapeFill };
export type { ImageLandscapeFillProps };
