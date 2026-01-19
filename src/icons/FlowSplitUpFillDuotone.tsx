import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitUpFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitUpFillDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitUpFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-up-fill-duotone" {...props}>
      <path fill="currentColor" d="M20 10a3 3 0 0 1-3 3h-4v2.13a4 4 0 0 0-2 0V13H7a3 3 0 0 1-3-3V8.87a4 4 0 0 0 2 0V10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8.87a4 4 0 0 0 2 0z" opacity={.4} />
        <path fill="currentColor" d="M15 5a4 4 0 1 0 8 0 4 4 0 0 0-8 0M8 19a4 4 0 1 0 8 0 4 4 0 0 0-8 0M1 5a4 4 0 1 0 8 0 4 4 0 0 0-8 0" />
    </IconBase>
  ))
);

FlowSplitUpFillDuotone.displayName = 'FlowSplitUpFillDuotone';

// Triple export pattern (lucide-react style)
export { FlowSplitUpFillDuotone, FlowSplitUpFillDuotone as FlowSplitUpFillDuotoneIcon, FlowSplitUpFillDuotone as SiFlowSplitUpFillDuotone };
export type { FlowSplitUpFillDuotoneProps };
