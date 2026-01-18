import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ImageLandscapeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ImageLandscapeRegularDuotone = memo(
  forwardRef<SVGSVGElement, ImageLandscapeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.6 3.25q1.64-.02 2.69.06 1.05.06 1.87.46c.89.45 1.62 1.18 2.07 2.07.28.55.4 1.16.46 1.87q.07 1.04.06 2.69v3.2q.02 1.64-.06 2.69a5 5 0 0 1-.46 1.87 4.8 4.8 0 0 1-2.07 2.07c-.55.28-1.16.4-1.87.46q-1.04.07-2.69.06H8.4q-1.64.02-2.69-.06a5 5 0 0 1-1.87-.46 4.8 4.8 0 0 1-2.07-2.07 5 5 0 0 1-.46-1.87q-.08-1.04-.06-2.69v-3.2q-.02-1.64.06-2.69.06-1.05.46-1.87a4.8 4.8 0 0 1 2.07-2.07c.55-.28 1.16-.4 1.87-.46q1.04-.07 2.69-.06zm-7.2 1.5c-1.13 0-1.94 0-2.57.05s-1 .15-1.3.3q-.94.5-1.43 1.42c-.15.3-.25.7-.3 1.31-.05.63-.05 1.44-.05 2.57v3.2c0 1.13 0 1.94.05 2.57s.15 1 .3 1.3q.5.94 1.42 1.43c.3.15.7.25 1.31.3.63.05 1.44.05 2.57.05h7.2c1.13 0 1.94 0 2.57-.05s1-.15 1.3-.3q.94-.5 1.43-1.42c.15-.3.25-.7.3-1.31.05-.63.05-1.44.05-2.57v-3.2c0-1.13 0-1.94-.05-2.57s-.15-1-.3-1.3q-.5-.94-1.42-1.43c-.3-.15-.7-.25-1.31-.3-.63-.05-1.44-.05-2.57-.05z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M17 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0M6.09 11.35a2 2 0 0 1 2.82 0l4.24 4.24c.2.2.5.2.7 0l1.24-1.24a2 2 0 0 1 2.82 0l3.03 3.03-.04.1q-.34.64-.9 1.08l-3.15-3.15a.5.5 0 0 0-.7 0l-1.24 1.24a2 2 0 0 1-2.82 0L7.85 12.4a.5.5 0 0 0-.7 0L2.87 16.7l-.07-.52q-.04-.61-.05-1.49z" />
    </IconBase>
  ))
);

ImageLandscapeRegularDuotone.displayName = 'ImageLandscapeRegularDuotone';

// Triple export pattern (lucide-react style)
export { ImageLandscapeRegularDuotone, ImageLandscapeRegularDuotone as ImageLandscapeRegularDuotoneIcon, ImageLandscapeRegularDuotone as SiImageLandscapeRegularDuotone };
export type { ImageLandscapeRegularDuotoneProps };
