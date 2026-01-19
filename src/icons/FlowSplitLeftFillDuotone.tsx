import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-left-fill-duotone" {...props}>
      <path fill="currentColor" d="M10 4a3 3 0 0 1 3 3v4h2.13a4 4 0 0 0 0 2H13v4a3 3 0 0 1-3 3H8.87a4 4 0 0 0 0-2H10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H8.87a4 4 0 0 0 0-2z" opacity={.4} />
        <path fill="currentColor" d="M5 15a4 4 0 1 1 0 8 4 4 0 0 1 0-8M19 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8M5 1a4 4 0 1 1 0 8 4 4 0 0 1 0-8" />
    </IconBase>
  ))
);

FlowSplitLeftFillDuotone.displayName = 'FlowSplitLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { FlowSplitLeftFillDuotone, FlowSplitLeftFillDuotone as FlowSplitLeftFillDuotoneIcon, FlowSplitLeftFillDuotone as SiFlowSplitLeftFillDuotone };
export default FlowSplitLeftFillDuotone;
export type { FlowSplitLeftFillDuotoneProps };
