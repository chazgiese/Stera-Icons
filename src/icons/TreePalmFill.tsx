import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TreePalmFillProps = Omit<IconBaseProps, 'children'>;

const TreePalmFill = memo(
  forwardRef<SVGSVGElement, TreePalmFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="tree-palm-fill" {...props}>
      <path d="M13.96 2.77a5.3 5.3 0 0 1 6.8 1.08 1 1 0 0 1-.25 1.51l-3.3 1.98q.42.15.83.4a5.7 5.7 0 0 1 2.48 6.56 1 1 0 0 1-1.47.56l-6.06-3.63c.06 2.46-.17 5.72-2.07 10.16a1 1 0 0 1-1.84-.78 21 21 0 0 0 1.9-9.36l-6.03 3.6a1 1 0 0 1-1.47-.55A5.67 5.67 0 0 1 6.8 7.34L3.5 5.36a1 1 0 0 1-.25-1.51 5.3 5.3 0 0 1 6.8-1.08c.84.5 1.5 1.2 1.96 1.98a5.6 5.6 0 0 1 1.96-1.98" />
    </IconBase>
  ))
);

TreePalmFill.displayName = 'TreePalmFill';

// Triple export pattern (lucide-react style)
export { TreePalmFill, TreePalmFill as TreePalmFillIcon, TreePalmFill as SiTreePalmFill };
export default TreePalmFill;
export type { TreePalmFillProps };
