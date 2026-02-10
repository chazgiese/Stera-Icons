import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TreeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TreeFillDuotone = memo(
  forwardRef<SVGSVGElement, TreeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="tree-fill-duotone" {...props}>
      <path fill="currentColor" d="M13 21a1 1 0 1 1-2 0v-2.25h2z" />
        <path fill="currentColor" d="M12 2.25q.36 0 .6.29l3.88 5a.75.75 0 0 1-.6 1.21h-.8l2.96 3.79a.75.75 0 0 1-.6 1.21h-.8l2.33 2.98c.63.82.05 2.02-1 2.02H6.03a1.25 1.25 0 0 1-.98-2.02l2.31-2.98h-.8a.75.75 0 0 1-.59-1.21l2.95-3.79h-.8a.75.75 0 0 1-.59-1.21l3.89-5 .06-.07a.8.8 0 0 1 .53-.22" opacity={.4} />
    </IconBase>
  ))
);

TreeFillDuotone.displayName = 'TreeFillDuotone';

// Triple export pattern (lucide-react style)
export { TreeFillDuotone, TreeFillDuotone as TreeFillDuotoneIcon, TreeFillDuotone as SiTreeFillDuotone };
export default TreeFillDuotone;
export type { TreeFillDuotoneProps };
