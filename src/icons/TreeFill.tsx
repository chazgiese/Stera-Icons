import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TreeFillProps = Omit<IconBaseProps, 'children'>;

const TreeFill = memo(
  forwardRef<SVGSVGElement, TreeFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="tree-fill" {...props}>
      <path fill="currentColor" d="M12 2.25q.36 0 .6.29l3.88 5a.75.75 0 0 1-.6 1.21h-.8l2.96 3.79a.75.75 0 0 1-.6 1.21h-.8l2.33 2.98c.63.82.05 2.02-1 2.02H13V21a1 1 0 0 1-2 0v-2.25H6.02a1.25 1.25 0 0 1-.98-2.02l2.31-2.98h-.8a.75.75 0 0 1-.59-1.21l2.95-3.79h-.8a.75.75 0 0 1-.59-1.21l3.89-5 .06-.07a.8.8 0 0 1 .53-.22" />
    </IconBase>
  ))
);

TreeFill.displayName = 'TreeFill';

// Triple export pattern (lucide-react style)
export { TreeFill, TreeFill as TreeFillIcon, TreeFill as SiTreeFill };
export default TreeFill;
export type { TreeFillProps };
