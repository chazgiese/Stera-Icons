import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TreeDeciduousBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TreeDeciduousBoldDuotone = memo(
  forwardRef<SVGSVGElement, TreeDeciduousBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="tree-deciduous-bold-duotone" {...props}>
      <path d="M13 21a1 1 0 1 1-2 0v-2h2z" />
        <path fillRule="evenodd" d="M12 2a3.6 3.6 0 0 1 3.5 2.67 4.08 4.08 0 0 1 2.92 6.36A4.53 4.53 0 0 1 15.5 19h-7a4.51 4.51 0 0 1-2.92-7.97A4.1 4.1 0 0 1 8.5 4.67 3.6 3.6 0 0 1 12 2m0 2c-.89 0-1.62.73-1.62 1.65v.02a1 1 0 0 1-1.15 1 2.06 2.06 0 0 0-2.36 2.07c0 .69.34 1.3.85 1.68a1 1 0 0 1-.2 1.72A2.5 2.5 0 0 0 6 14.47C6 15.87 7.13 17 8.5 17h7c1.37 0 2.5-1.12 2.5-2.53 0-1.05-.63-1.94-1.52-2.33a1 1 0 0 1-.2-1.72 2.1 2.1 0 0 0-1.51-3.75 1 1 0 0 1-1.14-1v-.02l-.01-.17A1.63 1.63 0 0 0 12 4" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

TreeDeciduousBoldDuotone.displayName = 'TreeDeciduousBoldDuotone';

// Triple export pattern (lucide-react style)
export { TreeDeciduousBoldDuotone, TreeDeciduousBoldDuotone as TreeDeciduousBoldDuotoneIcon, TreeDeciduousBoldDuotone as SiTreeDeciduousBoldDuotone };
export default TreeDeciduousBoldDuotone;
export type { TreeDeciduousBoldDuotoneProps };
