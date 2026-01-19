import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowBranchBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowBranchBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlowBranchBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-branch-bold-duotone" {...props}>
      <path d="M13.8 13.8a1 1 0 0 1 1.4 0l4.8 4.79V20h-1.41l-4.8-4.8a1 1 0 0 1 0-1.4M20 4v1.41l-5.54 5.54A7 7 0 0 1 9.51 13H2a1 1 0 0 1 0-2h7.51a5 5 0 0 0 3.54-1.46L18.59 4z" opacity={0.4} />
        <path fill="currentColor" d="M21 15a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 1 1 0-2h4v-4a1 1 0 0 1 1-1M21 2a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V4h-4a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

FlowBranchBoldDuotone.displayName = 'FlowBranchBoldDuotone';

// Triple export pattern (lucide-react style)
export { FlowBranchBoldDuotone, FlowBranchBoldDuotone as FlowBranchBoldDuotoneIcon, FlowBranchBoldDuotone as SiFlowBranchBoldDuotone };
export default FlowBranchBoldDuotone;
export type { FlowBranchBoldDuotoneProps };
