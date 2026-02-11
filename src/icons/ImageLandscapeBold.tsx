import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImageLandscapeBoldProps = Omit<IconBaseProps, 'children'>;

const ImageLandscapeBold = memo(
  forwardRef<SVGSVGElement, ImageLandscapeBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="image-landscape-bold" {...props}>
      <path d="M15 7.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
        <path fillRule="evenodd" d="M16.2 4q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v4.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H7.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q2 15.43 2 14.2V9.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q6.57 4 7.8 4zm-8.52 7.6a.25.25 0 0 0-.36 0L4 14.9q0 .72.04 1.18c.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h8.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .55-.41l-2.78-2.78a.25.25 0 0 0-.36 0l-1.23 1.23c-.88.88-2.3.88-3.18 0zM7.8 6c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82A26 26 0 0 0 4 9.8v2.29l1.9-1.91c.89-.88 2.31-.88 3.2 0l4.22 4.23c.1.1.26.1.36 0l1.23-1.23c.88-.88 2.3-.88 3.18 0l1.9 1.9.01-.88V9.8c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C17.64 6 17.06 6 16.2 6z" clipRule="evenodd" />
    </IconBase>
  ))
);

ImageLandscapeBold.displayName = 'ImageLandscapeBold';

// Triple export pattern (lucide-react style)
export { ImageLandscapeBold, ImageLandscapeBold as ImageLandscapeBoldIcon, ImageLandscapeBold as SiImageLandscapeBold };
export default ImageLandscapeBold;
export type { ImageLandscapeBoldProps };
