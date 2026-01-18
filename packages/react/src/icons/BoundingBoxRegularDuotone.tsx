import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BoundingBoxRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BoundingBoxRegularDuotone = memo(
  forwardRef<SVGSVGElement, BoundingBoxRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M7 16.25c.41 0 .75.34.75.75v4c0 .41-.34.75-.75.75H3a.75.75 0 0 1-.75-.75v-4c0-.41.34-.75.75-.75zm-3.25 4h2.5v-2.5h-2.5zM21 16.25c.41 0 .75.34.75.75v4c0 .41-.34.75-.75.75h-4a.75.75 0 0 1-.75-.75v-4c0-.41.34-.75.75-.75zm-3.25 4h2.5v-2.5h-2.5zM7 2.25c.41 0 .75.34.75.75v4c0 .41-.34.75-.75.75H3A.75.75 0 0 1 2.25 7V3c0-.41.34-.75.75-.75zm-3.25 4h2.5v-2.5h-2.5zM21 2.25c.41 0 .75.34.75.75v4c0 .41-.34.75-.75.75h-4a.75.75 0 0 1-.75-.75V3c0-.41.34-.75.75-.75zm-3.25 4h2.5v-2.5h-2.5z" clipRule="evenodd" />
        <path d="M16.25 19.75h-8.5v-1.5h8.5zM19.75 16.25h-1.5v-8.5h1.5zM5.75 16.25h-1.5v-8.5h1.5zM16.25 5.75h-8.5v-1.5h8.5z" />
    </IconBase>
  ))
);

BoundingBoxRegularDuotone.displayName = 'BoundingBoxRegularDuotone';

export { BoundingBoxRegularDuotone };
export type { BoundingBoxRegularDuotoneProps };
