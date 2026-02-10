import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TreePalmFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TreePalmFillDuotone = memo(
  forwardRef<SVGSVGElement, TreePalmFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="tree-palm-fill-duotone" {...props}>
      <path fill="currentColor" d="M13.96 2.77a5.3 5.3 0 0 1 6.8 1.08 1 1 0 0 1-.25 1.51l-3.3 1.98q.42.15.83.4a5.7 5.7 0 0 1 2.48 6.56 1 1 0 0 1-1.47.56L12 10.64l-7.05 4.22a1 1 0 0 1-1.47-.56A5.67 5.67 0 0 1 6.8 7.34L3.5 5.36a1 1 0 0 1-.25-1.51 5.3 5.3 0 0 1 6.8-1.08c.84.5 1.5 1.2 1.96 1.98a5.6 5.6 0 0 1 1.96-1.98" opacity={.4} />
        <path fill="currentColor" d="M13 11.23c.05 2.46-.18 5.72-2.08 10.16a1 1 0 0 1-1.84-.78 21 21 0 0 0 1.9-9.36l1.02-.6z" />
    </IconBase>
  ))
);

TreePalmFillDuotone.displayName = 'TreePalmFillDuotone';

// Triple export pattern (lucide-react style)
export { TreePalmFillDuotone, TreePalmFillDuotone as TreePalmFillDuotoneIcon, TreePalmFillDuotone as SiTreePalmFillDuotone };
export default TreePalmFillDuotone;
export type { TreePalmFillDuotoneProps };
