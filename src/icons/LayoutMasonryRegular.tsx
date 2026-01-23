import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayoutMasonryRegularProps = Omit<IconBaseProps, 'children'>;

const LayoutMasonryRegular = memo(
  forwardRef<SVGSVGElement, LayoutMasonryRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="layout-masonry" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M8.75 15.25a2 2 0 0 1 2 2v2.5a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-2.5c0-1.1.9-2 2-2zm-4.5 1.5a.5.5 0 0 0-.5.5v2.5c0 .28.22.5.5.5h4.5a.5.5 0 0 0 .5-.5v-2.5a.5.5 0 0 0-.5-.5zM19.75 11.25a2 2 0 0 1 2 2v6.5a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-6.5c0-1.1.9-2 2-2zm-4.5 1.5a.5.5 0 0 0-.5.5v6.5c0 .28.22.5.5.5h4.5a.5.5 0 0 0 .5-.5v-6.5a.5.5 0 0 0-.5-.5zM8.75 2.25a2 2 0 0 1 2 2v6.5a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-6.5c0-1.1.9-2 2-2zm-4.5 1.5a.5.5 0 0 0-.5.5v6.5c0 .28.22.5.5.5h4.5a.5.5 0 0 0 .5-.5v-6.5a.5.5 0 0 0-.5-.5zM19.75 2.25a2 2 0 0 1 2 2v2.5a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-2.5c0-1.1.9-2 2-2zm-4.5 1.5a.5.5 0 0 0-.5.5v2.5c0 .28.22.5.5.5h4.5a.5.5 0 0 0 .5-.5v-2.5a.5.5 0 0 0-.5-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

LayoutMasonryRegular.displayName = 'LayoutMasonryRegular';

// Triple export pattern (lucide-react style)
export { LayoutMasonryRegular, LayoutMasonryRegular as LayoutMasonryRegularIcon, LayoutMasonryRegular as SiLayoutMasonryRegular };
export default LayoutMasonryRegular;
export type { LayoutMasonryRegularProps };
