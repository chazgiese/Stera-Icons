import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BoundingBoxRegularProps = Omit<IconBaseProps, 'children'>;

const BoundingBoxRegular = memo(
  forwardRef<SVGSVGElement, BoundingBoxRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="bounding-box" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M7 2.25c.41 0 .75.34.75.75v1.25h8.5V3c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75v4c0 .41-.34.75-.75.75h-1.25v8.5H21c.41 0 .75.34.75.75v4c0 .41-.34.75-.75.75h-4a.75.75 0 0 1-.75-.75v-1.25h-8.5V21c0 .41-.34.75-.75.75H3a.75.75 0 0 1-.75-.75v-4c0-.41.34-.75.75-.75h1.25v-8.5H3A.75.75 0 0 1 2.25 7V3c0-.41.34-.75.75-.75zm-3.25 18h2.5v-2.5h-2.5zm14 0h2.5v-2.5h-2.5zM7.75 7c0 .41-.34.75-.75.75H5.75v8.5H7c.41 0 .75.34.75.75v1.25h8.5V17c0-.41.34-.75.75-.75h1.25v-8.5H17a.75.75 0 0 1-.75-.75V5.75h-8.5zm-4-.75h2.5v-2.5h-2.5zm14 0h2.5v-2.5h-2.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

BoundingBoxRegular.displayName = 'BoundingBoxRegular';

// Triple export pattern (lucide-react style)
export { BoundingBoxRegular, BoundingBoxRegular as BoundingBoxRegularIcon, BoundingBoxRegular as SiBoundingBoxRegular };
export type { BoundingBoxRegularProps };
