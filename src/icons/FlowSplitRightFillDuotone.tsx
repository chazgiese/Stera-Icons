import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitRightFillDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-right-fill-duotone" {...props}>
      <path fill="currentColor" d="M19 15a4 4 0 1 0 0 8 4 4 0 0 0 0-8M5 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8M19 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8" />
        <path fill="currentColor" d="M15.13 4a4 4 0 0 0 0 2H14a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1.13a4 4 0 0 0 0 2H14a3 3 0 0 1-3-3v-4H8.87a4 4 0 0 0 0-2H11V7a3 3 0 0 1 3-3z" opacity={.4} />
    </IconBase>
  ))
);

FlowSplitRightFillDuotone.displayName = 'FlowSplitRightFillDuotone';

// Triple export pattern (lucide-react style)
export { FlowSplitRightFillDuotone, FlowSplitRightFillDuotone as FlowSplitRightFillDuotoneIcon, FlowSplitRightFillDuotone as SiFlowSplitRightFillDuotone };
export type { FlowSplitRightFillDuotoneProps };
