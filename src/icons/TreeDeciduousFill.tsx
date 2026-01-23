import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TreeDeciduousFillProps = Omit<IconBaseProps, 'children'>;

const TreeDeciduousFill = memo(
  forwardRef<SVGSVGElement, TreeDeciduousFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="tree-deciduous-fill" {...props}>
      <path fill="currentColor" d="M12 1.25a3.75 3.75 0 0 1 3.67 3 4.25 4.25 0 0 1 3.13 6.92 4.74 4.74 0 0 1-2.8 8.58h-3V22a1 1 0 1 1-2 0v-2.25H8a4.75 4.75 0 0 1-2.8-8.58 4.23 4.23 0 0 1 3.12-6.92c.35-1.71 1.86-3 3.68-3" />
    </IconBase>
  ))
);

TreeDeciduousFill.displayName = 'TreeDeciduousFill';

// Triple export pattern (lucide-react style)
export { TreeDeciduousFill, TreeDeciduousFill as TreeDeciduousFillIcon, TreeDeciduousFill as SiTreeDeciduousFill };
export default TreeDeciduousFill;
export type { TreeDeciduousFillProps };
