import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitSquareLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitSquareLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitSquareLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-square-left-fill-duotone" {...props}>
      <path d="M10 4a3 3 0 0 1 3 3v4h2.13a4 4 0 0 0 0 2H13v4a3 3 0 0 1-3 3H9v-2h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H9V4z" opacity={.4} />
        <path d="M9 6.5A2.5 2.5 0 0 1 6.5 9h-3A2.5 2.5 0 0 1 1 6.5v-3A2.5 2.5 0 0 1 3.5 1h3A2.5 2.5 0 0 1 9 3.5zM9 20.5A2.5 2.5 0 0 1 6.5 23h-3A2.5 2.5 0 0 1 1 20.5v-3A2.5 2.5 0 0 1 3.5 15h3A2.5 2.5 0 0 1 9 17.5zM23 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0" />
    </IconBase>
  ))
);

FlowSplitSquareLeftFillDuotone.displayName = 'FlowSplitSquareLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { FlowSplitSquareLeftFillDuotone, FlowSplitSquareLeftFillDuotone as FlowSplitSquareLeftFillDuotoneIcon, FlowSplitSquareLeftFillDuotone as SiFlowSplitSquareLeftFillDuotone };
export default FlowSplitSquareLeftFillDuotone;
export type { FlowSplitSquareLeftFillDuotoneProps };
