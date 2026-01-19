import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitArrowUpBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowUpBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowUpBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-arrow-up-bold-duotone" {...props}>
      <path fill="currentColor" d="M20 4.41V9a3 3 0 0 1-3 3h-4v3.13a4 4 0 0 0-2 0V12H7a3 3 0 0 1-3-3V4.41l1-1 1 1V9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4.41l1-1z" opacity={.4} />
        <path fill="currentColor" d="M7.3 5.7a1 1 0 1 0 1.4-1.4l-3-3a1 1 0 0 0-1.4 0l-3 3a1 1 0 1 0 1.4 1.4L5 3.42zM21.3 5.7a1 1 0 0 0 1.4-1.4l-3-3a1 1 0 0 0-1.4 0l-3 3a1 1 0 1 0 1.4 1.4L19 3.42z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 23a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitArrowUpBoldDuotone.displayName = 'FlowSplitArrowUpBoldDuotone';

// Triple export pattern (lucide-react style)
export { FlowSplitArrowUpBoldDuotone, FlowSplitArrowUpBoldDuotone as FlowSplitArrowUpBoldDuotoneIcon, FlowSplitArrowUpBoldDuotone as SiFlowSplitArrowUpBoldDuotone };
export default FlowSplitArrowUpBoldDuotone;
export type { FlowSplitArrowUpBoldDuotoneProps };
