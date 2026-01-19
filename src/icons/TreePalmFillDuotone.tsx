import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TreePalmFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TreePalmFillDuotone = memo(
  forwardRef<SVGSVGElement, TreePalmFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="tree-palm-fill-duotone" {...props}>
      <path fill="currentColor" d="M14.28 1.82a6 6 0 0 1 7.47 1.15 1 1 0 0 1-.25 1.53l-3.88 2.25q.57.2 1.1.5a6 6 0 0 1 2.74 7.06 1 1 0 0 1-1.45.56L12 10.22l-8 4.65a1 1 0 0 1-1.46-.56 6 6 0 0 1 3.83-7.56L2.5 4.5a1 1 0 0 1-.25-1.53 6 6 0 0 1 7.47-1.15c1 .58 1.76 1.4 2.28 2.33a6 6 0 0 1 2.28-2.33" opacity={.4} />
        <path fill="currentColor" d="M13.13 10.88c.11 2.7 0 6.36-2.21 11.51a1 1 0 1 1-1.84-.78 22.6 22.6 0 0 0 2.04-10.88l.88-.5z" />
    </IconBase>
  ))
);

TreePalmFillDuotone.displayName = 'TreePalmFillDuotone';

// Triple export pattern (lucide-react style)
export { TreePalmFillDuotone, TreePalmFillDuotone as TreePalmFillDuotoneIcon, TreePalmFillDuotone as SiTreePalmFillDuotone };
export type { TreePalmFillDuotoneProps };
