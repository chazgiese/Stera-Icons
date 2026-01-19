import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TreeDeciduousBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TreeDeciduousBoldDuotone = memo(
  forwardRef<SVGSVGElement, TreeDeciduousBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="tree-deciduous-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a4 4 0 0 1 3.88 3.02 4.5 4.5 0 0 1 3.27 7.1A4.99 4.99 0 0 1 16 20H8a5 5 0 0 1-3.16-8.88 4.5 4.5 0 0 1 3.28-7.1A4 4 0 0 1 12 1m0 2a2 2 0 0 0-2 2v.03a1 1 0 0 1-1.14 1L8.5 6a2.5 2.5 0 0 0-1.48 4.52 1 1 0 0 1-.2 1.72A3 3 0 0 0 8 18h8a3 3 0 0 0 1.18-5.76 1 1 0 0 1-.2-1.72 2.5 2.5 0 0 0-1.84-4.5 1 1 0 0 1-1.14-1V5a2 2 0 0 0-2-2" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M13 22a1 1 0 1 1-2 0v-2h2z" />
    </IconBase>
  ))
);

TreeDeciduousBoldDuotone.displayName = 'TreeDeciduousBoldDuotone';

// Triple export pattern (lucide-react style)
export { TreeDeciduousBoldDuotone, TreeDeciduousBoldDuotone as TreeDeciduousBoldDuotoneIcon, TreeDeciduousBoldDuotone as SiTreeDeciduousBoldDuotone };
export default TreeDeciduousBoldDuotone;
export type { TreeDeciduousBoldDuotoneProps };
