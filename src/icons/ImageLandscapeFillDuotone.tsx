import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImageLandscapeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ImageLandscapeFillDuotone = memo(
  forwardRef<SVGSVGElement, ImageLandscapeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="image-landscape-fill-duotone" {...props}>
      <path d="M2.09 16.63q.04.28.1.55l.01.02.1.29q.06.16.14.33a4 4 0 0 1-.35-1.2" opacity={0.4} />
        <path fillRule="evenodd" d="M16.2 4q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v4.4q.01 1.23-.04 2.05a6 6 0 0 1-.1.7l-.42-.42-3.35-3.35a2.25 2.25 0 0 0-3.18 0l-1.23 1.23c-.1.1-.26.1-.36 0L9.1 10.18a2.25 2.25 0 0 0-3.18 0L2 14.08V9.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q6.57 4 7.8 4zM15 6.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" opacity={0.4} />
        <path d="m2.02 15.88.01.17.02.2v.06-.06z" opacity={0.4} />
        <path d="M5.9 10.18c.89-.88 2.31-.88 3.2 0l4.22 4.23c.1.1.26.1.36 0l1.23-1.23c.88-.88 2.3-.88 3.18 0l3.35 3.35.48.47-.27.63-.09.19a4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H7.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4A4 4 0 0 1 2.3 17.5l-.09-.29v-.02a5 5 0 0 1-.14-.76v-.06l-.01-.1-.02-.21v-.17L2 14.5v-.41zM15 6.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
    </IconBase>
  ))
);

ImageLandscapeFillDuotone.displayName = 'ImageLandscapeFillDuotone';

// Triple export pattern (lucide-react style)
export { ImageLandscapeFillDuotone, ImageLandscapeFillDuotone as ImageLandscapeFillDuotoneIcon, ImageLandscapeFillDuotone as SiImageLandscapeFillDuotone };
export default ImageLandscapeFillDuotone;
export type { ImageLandscapeFillDuotoneProps };
