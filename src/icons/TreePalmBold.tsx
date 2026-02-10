import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TreePalmBoldProps = Omit<IconBaseProps, 'children'>;

const TreePalmBold = memo(
  forwardRef<SVGSVGElement, TreePalmBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="tree-palm-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13.96 2.77a5.3 5.3 0 0 1 6.8 1.08 1 1 0 0 1-.25 1.51l-3.3 1.98q.42.15.83.4a5.7 5.7 0 0 1 2.48 6.56 1 1 0 0 1-1.47.56l-6.06-3.63c.06 2.46-.17 5.72-2.07 10.16a1 1 0 0 1-1.84-.78 21 21 0 0 0 1.9-9.36l-6.03 3.6a1 1 0 0 1-1.47-.55A5.67 5.67 0 0 1 6.8 7.34L3.5 5.36a1 1 0 0 1-.25-1.51 5.3 5.3 0 0 1 6.8-1.08c.84.5 1.5 1.2 1.96 1.98a5.6 5.6 0 0 1 1.96-1.98M9.87 9.18A3.4 3.4 0 0 0 7 9.46a3.7 3.7 0 0 0-1.76 2.9l4.98-2.98zm7.14.28a3.4 3.4 0 0 0-2.89-.28l-.33.2 4.98 2.98A3.7 3.7 0 0 0 17 9.46m-8-4.97a3.3 3.3 0 0 0-3.27-.11l5.03 3A3.7 3.7 0 0 0 9 4.48m9.25-.11c-1-.52-2.22-.52-3.27.1a3.7 3.7 0 0 0-1.76 2.9z" clipRule="evenodd" />
    </IconBase>
  ))
);

TreePalmBold.displayName = 'TreePalmBold';

// Triple export pattern (lucide-react style)
export { TreePalmBold, TreePalmBold as TreePalmBoldIcon, TreePalmBold as SiTreePalmBold };
export default TreePalmBold;
export type { TreePalmBoldProps };
