import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitArrowLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-arrow-left-fill-duotone" {...props}>
      <path fill="currentColor" d="M9 4a3 3 0 0 1 3 3v4h3.13a4 4 0 0 0 0 2H12v4a3 3 0 0 1-3 3H6v-2h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H6V4z" opacity={.4} />
        <path fill="currentColor" d="M6 8a1 1 0 0 1-1.7.7l-3-3a1 1 0 0 1 0-1.4l3-3A1 1 0 0 1 6 2zM6 22a1 1 0 0 1-1.7.7l-3-3a1 1 0 0 1 0-1.4l3-3A1 1 0 0 1 6 16zM23 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0" />
    </IconBase>
  ))
);

FlowSplitArrowLeftFillDuotone.displayName = 'FlowSplitArrowLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { FlowSplitArrowLeftFillDuotone, FlowSplitArrowLeftFillDuotone as FlowSplitArrowLeftFillDuotoneIcon, FlowSplitArrowLeftFillDuotone as SiFlowSplitArrowLeftFillDuotone };
export type { FlowSplitArrowLeftFillDuotoneProps };
