import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TreeDeciduousFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TreeDeciduousFillDuotone = memo(
  forwardRef<SVGSVGElement, TreeDeciduousFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="tree-deciduous-fill-duotone" {...props}>
      <path fill="currentColor" d="M13 21a1 1 0 1 1-2 0v-2.25h2z" />
        <path fill="currentColor" d="M12 2.25a3.4 3.4 0 0 1 3.3 2.65 3.83 3.83 0 0 1 2.78 6.18 4.28 4.28 0 0 1-2.58 7.67h-7a4.28 4.28 0 0 1-2.58-7.67A3.84 3.84 0 0 1 8.7 4.9 3.4 3.4 0 0 1 12 2.25" opacity={.4} />
    </IconBase>
  ))
);

TreeDeciduousFillDuotone.displayName = 'TreeDeciduousFillDuotone';

// Triple export pattern (lucide-react style)
export { TreeDeciduousFillDuotone, TreeDeciduousFillDuotone as TreeDeciduousFillDuotoneIcon, TreeDeciduousFillDuotone as SiTreeDeciduousFillDuotone };
export default TreeDeciduousFillDuotone;
export type { TreeDeciduousFillDuotoneProps };
