import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitArrowDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowDownFillDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-arrow-down-fill-duotone" {...props}>
      <path fill="currentColor" d="M13 12h4a3 3 0 0 1 3 3v3h-2v-3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v3H4v-3a3 3 0 0 1 3-3h4V8.87a4 4 0 0 0 2 0z" opacity={.4} />
        <path fill="currentColor" d="M8 18a1 1 0 0 1 .7 1.7l-3 3a1 1 0 0 1-1.4 0l-3-3A1 1 0 0 1 2 18zM22 18a1 1 0 0 1 .7 1.7l-3 3a1 1 0 0 1-1.4 0l-3-3A1 1 0 0 1 16 18zM12 1a4 4 0 1 1 0 8 4 4 0 0 1 0-8" />
    </IconBase>
  ))
);

FlowSplitArrowDownFillDuotone.displayName = 'FlowSplitArrowDownFillDuotone';

// Triple export pattern (lucide-react style)
export { FlowSplitArrowDownFillDuotone, FlowSplitArrowDownFillDuotone as FlowSplitArrowDownFillDuotoneIcon, FlowSplitArrowDownFillDuotone as SiFlowSplitArrowDownFillDuotone };
export type { FlowSplitArrowDownFillDuotoneProps };
