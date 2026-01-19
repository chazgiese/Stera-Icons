import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitSquareRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitSquareRightFillDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitSquareRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-square-right-fill-duotone" {...props}>
      <path fill="currentColor" d="M15 4v2h-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1v2h-1a3 3 0 0 1-3-3v-4H8.87a4 4 0 0 0 0-2H11V7a3 3 0 0 1 3-3z" opacity={.4} />
        <path fill="currentColor" d="M15 6.5A2.5 2.5 0 0 0 17.5 9h3A2.5 2.5 0 0 0 23 6.5v-3A2.5 2.5 0 0 0 20.5 1h-3A2.5 2.5 0 0 0 15 3.5zM15 20.5a2.5 2.5 0 0 0 2.5 2.5h3a2.5 2.5 0 0 0 2.5-2.5v-3a2.5 2.5 0 0 0-2.5-2.5h-3a2.5 2.5 0 0 0-2.5 2.5zM1 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0" />
    </IconBase>
  ))
);

FlowSplitSquareRightFillDuotone.displayName = 'FlowSplitSquareRightFillDuotone';

// Triple export pattern (lucide-react style)
export { FlowSplitSquareRightFillDuotone, FlowSplitSquareRightFillDuotone as FlowSplitSquareRightFillDuotoneIcon, FlowSplitSquareRightFillDuotone as SiFlowSplitSquareRightFillDuotone };
export default FlowSplitSquareRightFillDuotone;
export type { FlowSplitSquareRightFillDuotoneProps };
