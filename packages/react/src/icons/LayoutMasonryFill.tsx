import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LayoutMasonryFillProps = Omit<IconBaseProps, 'children'>;

const LayoutMasonryFill = memo(
  forwardRef<SVGSVGElement, LayoutMasonryFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M8.75 15.25a2 2 0 0 1 2 2v2.5a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-2.5c0-1.1.9-2 2-2zM19.75 11.25a2 2 0 0 1 2 2v6.5a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-6.5c0-1.1.9-2 2-2zM8.75 2.25a2 2 0 0 1 2 2v6.5a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-6.5c0-1.1.9-2 2-2zM19.75 2.25a2 2 0 0 1 2 2v2.5a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-2.5c0-1.1.9-2 2-2z" />
    </IconBase>
  ))
);

LayoutMasonryFill.displayName = 'LayoutMasonryFill';

export { LayoutMasonryFill };
export type { LayoutMasonryFillProps };
