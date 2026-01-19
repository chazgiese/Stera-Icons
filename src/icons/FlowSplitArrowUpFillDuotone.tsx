import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitArrowUpFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowUpFillDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowUpFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-arrow-up-fill-duotone" {...props}>
      <path fill="currentColor" d="M6 9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6h2v3a3 3 0 0 1-3 3h-4v3.13a4 4 0 0 0-2 0V12H7a3 3 0 0 1-3-3V6h2z" opacity={.4} />
        <path fill="currentColor" d="M8 6a1 1 0 0 0 .7-1.7l-3-3a1 1 0 0 0-1.4 0l-3 3A1 1 0 0 0 2 6zM22 6a1 1 0 0 0 .7-1.7l-3-3a1 1 0 0 0-1.4 0l-3 3A1 1 0 0 0 16 6zM12 23a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
    </IconBase>
  ))
);

FlowSplitArrowUpFillDuotone.displayName = 'FlowSplitArrowUpFillDuotone';

// Triple export pattern (lucide-react style)
export { FlowSplitArrowUpFillDuotone, FlowSplitArrowUpFillDuotone as FlowSplitArrowUpFillDuotoneIcon, FlowSplitArrowUpFillDuotone as SiFlowSplitArrowUpFillDuotone };
export type { FlowSplitArrowUpFillDuotoneProps };
