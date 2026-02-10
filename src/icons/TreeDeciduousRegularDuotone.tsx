import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TreeDeciduousRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TreeDeciduousRegularDuotone = memo(
  forwardRef<SVGSVGElement, TreeDeciduousRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="tree-deciduous-duotone" {...props}>
      <path fill="currentColor" d="M12.75 21a.75.75 0 0 1-1.5 0v-2.25h1.5z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2.25a3.4 3.4 0 0 1 3.3 2.65 3.83 3.83 0 0 1 2.78 6.18 4.28 4.28 0 0 1-2.58 7.67h-7a4.28 4.28 0 0 1-2.58-7.67A3.84 3.84 0 0 1 8.7 4.9 3.4 3.4 0 0 1 12 2.25m0 1.5c-1.03 0-1.87.84-1.87 1.9v.02a.75.75 0 0 1-.86.75 2.3 2.3 0 0 0-2.64 2.32c0 .77.37 1.46.94 1.88a.75.75 0 0 1-.15 1.3 2.78 2.78 0 0 0 1.08 5.33h7a2.78 2.78 0 0 0 1.08-5.34.75.75 0 0 1-.15-1.29 2.34 2.34 0 0 0-1.7-4.2.75.75 0 0 1-.86-.75v-.22c-.1-.96-.9-1.7-1.87-1.7" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

TreeDeciduousRegularDuotone.displayName = 'TreeDeciduousRegularDuotone';

// Triple export pattern (lucide-react style)
export { TreeDeciduousRegularDuotone, TreeDeciduousRegularDuotone as TreeDeciduousRegularDuotoneIcon, TreeDeciduousRegularDuotone as SiTreeDeciduousRegularDuotone };
export default TreeDeciduousRegularDuotone;
export type { TreeDeciduousRegularDuotoneProps };
