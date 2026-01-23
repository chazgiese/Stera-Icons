import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitSquareDownFillProps = Omit<IconBaseProps, 'children'>;

const FlowSplitSquareDownFill = memo(
  forwardRef<SVGSVGElement, FlowSplitSquareDownFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-square-down-fill" {...props}>
      <path fill="currentColor" d="M12 1a4 4 0 0 1 1 7.87V11h4a3 3 0 0 1 3 3v1h.5a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5h-3a2.5 2.5 0 0 1-2.5-2.5v-3a2.5 2.5 0 0 1 2.5-2.5h.5v-1a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1h.5A2.5 2.5 0 0 1 9 17.5v3A2.5 2.5 0 0 1 6.5 23h-3A2.5 2.5 0 0 1 1 20.5v-3A2.5 2.5 0 0 1 3.5 15H4v-1a3 3 0 0 1 3-3h4V8.87A4 4 0 0 1 12 1" />
    </IconBase>
  ))
);

FlowSplitSquareDownFill.displayName = 'FlowSplitSquareDownFill';

// Triple export pattern (lucide-react style)
export { FlowSplitSquareDownFill, FlowSplitSquareDownFill as FlowSplitSquareDownFillIcon, FlowSplitSquareDownFill as SiFlowSplitSquareDownFill };
export default FlowSplitSquareDownFill;
export type { FlowSplitSquareDownFillProps };
