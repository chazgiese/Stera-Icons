import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BoundingBoxRegularProps = Omit<IconBaseProps, 'children'>;

const BoundingBoxRegular = memo(
  forwardRef<SVGSVGElement, BoundingBoxRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="bounding-box" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M8 3.25c.41 0 .75.34.75.75v1.25h6.5V4c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75v4c0 .41-.34.75-.75.75h-1.25v6.5H20c.41 0 .75.34.75.75v4c0 .41-.34.75-.75.75h-4a.75.75 0 0 1-.75-.75v-1.25h-6.5V20c0 .41-.34.75-.75.75H4a.75.75 0 0 1-.75-.75v-4c0-.41.34-.75.75-.75h1.25v-6.5H4A.75.75 0 0 1 3.25 8V4c0-.41.34-.75.75-.75zm-3.25 16h2.5v-2.5h-2.5zm12 0h2.5v-2.5h-2.5zM8.75 8c0 .41-.34.75-.75.75H6.75v6.5H8c.41 0 .75.34.75.75v1.25h6.5V16c0-.41.34-.75.75-.75h1.25v-6.5H16a.75.75 0 0 1-.75-.75V6.75h-6.5zm-4-.75h2.5v-2.5h-2.5zm12 0h2.5v-2.5h-2.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

BoundingBoxRegular.displayName = 'BoundingBoxRegular';

// Triple export pattern (lucide-react style)
export { BoundingBoxRegular, BoundingBoxRegular as BoundingBoxRegularIcon, BoundingBoxRegular as SiBoundingBoxRegular };
export default BoundingBoxRegular;
export type { BoundingBoxRegularProps };
