import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BoundingBoxRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BoundingBoxRegularDuotone = memo(
  forwardRef<SVGSVGElement, BoundingBoxRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bounding-box-duotone" {...props}>
      <path d="M15.25 18.75h-6.5v-1.5h6.5zM18.75 15.25h-1.5v-6.5h1.5zM6.75 15.25h-1.5v-6.5h1.5zM15.25 6.75h-6.5v-1.5h6.5z" opacity={0.4} />
        <path fillRule="evenodd" d="M8 15.25c.41 0 .75.34.75.75v4c0 .41-.34.75-.75.75H4a.75.75 0 0 1-.75-.75v-4c0-.41.34-.75.75-.75zm-3.25 4h2.5v-2.5h-2.5zM20 15.25c.41 0 .75.34.75.75v4c0 .41-.34.75-.75.75h-4a.75.75 0 0 1-.75-.75v-4c0-.41.34-.75.75-.75zm-3.25 4h2.5v-2.5h-2.5zM8 3.25c.41 0 .75.34.75.75v4c0 .41-.34.75-.75.75H4A.75.75 0 0 1 3.25 8V4c0-.41.34-.75.75-.75zm-3.25 4h2.5v-2.5h-2.5zM20 3.25c.41 0 .75.34.75.75v4c0 .41-.34.75-.75.75h-4a.75.75 0 0 1-.75-.75V4c0-.41.34-.75.75-.75zm-3.25 4h2.5v-2.5h-2.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

BoundingBoxRegularDuotone.displayName = 'BoundingBoxRegularDuotone';

// Triple export pattern (lucide-react style)
export { BoundingBoxRegularDuotone, BoundingBoxRegularDuotone as BoundingBoxRegularDuotoneIcon, BoundingBoxRegularDuotone as SiBoundingBoxRegularDuotone };
export default BoundingBoxRegularDuotone;
export type { BoundingBoxRegularDuotoneProps };
