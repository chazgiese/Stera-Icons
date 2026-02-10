import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TreeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TreeRegularDuotone = memo(
  forwardRef<SVGSVGElement, TreeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="tree-duotone" {...props}>
      <path fill="currentColor" d="M12.75 21a.75.75 0 0 1-1.5 0v-2.25h1.5z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2.25q.36 0 .6.29l3.88 5a.75.75 0 0 1-.6 1.21h-.8l2.96 3.79a.75.75 0 0 1-.6 1.21h-.8l2.32 2.98c.64.82.06 2.02-.98 2.02H6.02a1.25 1.25 0 0 1-.98-2.02l2.31-2.98h-.8a.75.75 0 0 1-.59-1.21l2.95-3.79h-.8a.75.75 0 0 1-.59-1.21l3.89-5 .05-.07a.8.8 0 0 1 .54-.22m-2.36 5h.8a.75.75 0 0 1 .6 1.21l-2.95 3.79h.8a.75.75 0 0 1 .6 1.21l-2.96 3.79h10.94l-2.95-3.79a.75.75 0 0 1 .6-1.21h.8l-2.96-3.79a.75.75 0 0 1 .6-1.21h.8L12 4.22z" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

TreeRegularDuotone.displayName = 'TreeRegularDuotone';

// Triple export pattern (lucide-react style)
export { TreeRegularDuotone, TreeRegularDuotone as TreeRegularDuotoneIcon, TreeRegularDuotone as SiTreeRegularDuotone };
export default TreeRegularDuotone;
export type { TreeRegularDuotoneProps };
