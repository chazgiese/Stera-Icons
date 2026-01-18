import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitRightFillProps = Omit<IconBaseProps, 'children'>;

const FlowSplitRightFill = memo(
  forwardRef<SVGSVGElement, FlowSplitRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M19 1a4 4 0 0 0-3.87 3H14a3 3 0 0 0-3 3v4H8.87a4 4 0 1 0 0 2H11v4a3 3 0 0 0 3 3h1.13a4 4 0 1 0 0-2H14a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.13A4 4 0 1 0 19 1" />
    </IconBase>
  ))
);

FlowSplitRightFill.displayName = 'FlowSplitRightFill';

// Triple export pattern (lucide-react style)
export { FlowSplitRightFill, FlowSplitRightFill as FlowSplitRightFillIcon, FlowSplitRightFill as SiFlowSplitRightFill };
export type { FlowSplitRightFillProps };
