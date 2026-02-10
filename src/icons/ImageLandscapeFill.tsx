import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImageLandscapeFillProps = Omit<IconBaseProps, 'children'>;

const ImageLandscapeFill = memo(
  forwardRef<SVGSVGElement, ImageLandscapeFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="image-landscape-fill" {...props}>
      <path fill="currentColor" d="M15 7.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
        <path fill="currentColor" fillRule="evenodd" d="M16.2 4q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v4.4q.01 1.23-.04 2.05a6 6 0 0 1-.1.7l.06.05-.26.62-.1.2a4 4 0 0 1-1.74 1.74q-.45.23-.95.32l-.62.08q-.82.05-2.05.04H7.8q-1.23.01-2.05-.04l-.62-.08a4 4 0 0 1-.95-.32 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.37-1.35v-.05l-.02-.06v-.11A15 15 0 0 1 2 14.5V9.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q6.57 4 7.8 4zM7.8 6c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82A26 26 0 0 0 4 9.8v2.29l1.9-1.91c.89-.88 2.31-.88 3.2 0l4.22 4.23c.1.1.26.1.36 0l1.23-1.23c.88-.88 2.3-.88 3.18 0l1.9 1.9.01-.88V9.8c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C17.64 6 17.06 6 16.2 6z" clipRule="evenodd" />
    </IconBase>
  ))
);

ImageLandscapeFill.displayName = 'ImageLandscapeFill';

// Triple export pattern (lucide-react style)
export { ImageLandscapeFill, ImageLandscapeFill as ImageLandscapeFillIcon, ImageLandscapeFill as SiImageLandscapeFill };
export default ImageLandscapeFill;
export type { ImageLandscapeFillProps };
