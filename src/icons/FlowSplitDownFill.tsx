import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitDownFillProps = Omit<IconBaseProps, 'children'>;

const FlowSplitDownFill = memo(
  forwardRef<SVGSVGElement, FlowSplitDownFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-down-fill" {...props}>
      <path fill="currentColor" d="M12 1a4 4 0 0 1 1 7.87V11h4a3 3 0 0 1 3 3v1.13a4 4 0 1 1-2 0V14a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1.13a4 4 0 1 1-2 0V14a3 3 0 0 1 3-3h4V8.87A4 4 0 0 1 12 1" />
    </IconBase>
  ))
);

FlowSplitDownFill.displayName = 'FlowSplitDownFill';

// Triple export pattern (lucide-react style)
export { FlowSplitDownFill, FlowSplitDownFill as FlowSplitDownFillIcon, FlowSplitDownFill as SiFlowSplitDownFill };
export default FlowSplitDownFill;
export type { FlowSplitDownFillProps };
