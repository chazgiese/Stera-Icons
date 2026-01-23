import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TreePalmRegularProps = Omit<IconBaseProps, 'children'>;

const TreePalmRegular = memo(
  forwardRef<SVGSVGElement, TreePalmRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="tree-palm" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.4 2.04c2.41-1.4 5.4-.89 7.16 1.1a.75.75 0 0 1-.18 1.15l-4.39 2.54q.84.2 1.6.64a5.8 5.8 0 0 1 2.63 6.76.75.75 0 0 1-1.09.42l-7.01-4.07c.13 2.74.09 6.47-2.2 11.81a1 1 0 1 1-1.84-.78 22.6 22.6 0 0 0 2.02-11.16l-7.23 4.2a.75.75 0 0 1-1.1-.42 5.77 5.77 0 0 1 4.24-7.4L2.62 4.29a.75.75 0 0 1-.18-1.15 5.7 5.7 0 0 1 7.16-1.1A6 6 0 0 1 12 4.7a6 6 0 0 1 2.4-2.67m-4.62 6.4A4.3 4.3 0 0 0 4 12.84l6.67-3.88zm8.06.32a4.3 4.3 0 0 0-3.62-.32l-.9.52 6.67 3.87a4.3 4.3 0 0 0-2.15-4.07m-9-5.42a4.3 4.3 0 0 0-4.57.17l6.72 3.9a4.3 4.3 0 0 0-2.15-4.07m10.9.17a4.3 4.3 0 0 0-6.72 3.9z" clipRule="evenodd" />
    </IconBase>
  ))
);

TreePalmRegular.displayName = 'TreePalmRegular';

// Triple export pattern (lucide-react style)
export { TreePalmRegular, TreePalmRegular as TreePalmRegularIcon, TreePalmRegular as SiTreePalmRegular };
export default TreePalmRegular;
export type { TreePalmRegularProps };
