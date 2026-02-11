import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TreePalmRegularProps = Omit<IconBaseProps, 'children'>;

const TreePalmRegular = memo(
  forwardRef<SVGSVGElement, TreePalmRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="tree-palm" {...props}>
      <path fillRule="evenodd" d="M14.09 2.99A5.1 5.1 0 0 1 20.57 4a.75.75 0 0 1-.19 1.14L16.61 7.4q.66.18 1.3.55a5.4 5.4 0 0 1 2.37 6.27.75.75 0 0 1-1.1.41l-6.2-3.7a23 23 0 0 1-2.06 10.45 1 1 0 0 1-1.84-.78 21 21 0 0 0 1.9-9.65l-6.16 3.68a.75.75 0 0 1-1.1-.41A5.4 5.4 0 0 1 7.4 7.4L3.62 5.15A.75.75 0 0 1 3.43 4 5.1 5.1 0 0 1 9.91 3 5.3 5.3 0 0 1 12 5.29a5.3 5.3 0 0 1 2.09-2.3m-4.1 5.97a3.6 3.6 0 0 0-3.13.29 3.9 3.9 0 0 0-1.89 3.55l5.73-3.42zm7.15.29a3.6 3.6 0 0 0-3.13-.3l-.7.43 5.71 3.42c.07-1.4-.61-2.8-1.88-3.55m1.6-4.87a3.6 3.6 0 0 0-3.88-.1 3.9 3.9 0 0 0-1.88 3.55l.33-.2zm-9.6-.1a3.6 3.6 0 0 0-3.89.1l5.63 3.37a1 1 0 0 1 .14-.3 3.9 3.9 0 0 0-1.88-3.18" clipRule="evenodd" />
    </IconBase>
  ))
);

TreePalmRegular.displayName = 'TreePalmRegular';

// Triple export pattern (lucide-react style)
export { TreePalmRegular, TreePalmRegular as TreePalmRegularIcon, TreePalmRegular as SiTreePalmRegular };
export default TreePalmRegular;
export type { TreePalmRegularProps };
