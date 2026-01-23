import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitArrowDownFillProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowDownFill = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowDownFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-arrow-down-fill" {...props}>
      <path fill="currentColor" d="M12 1a4 4 0 0 1 1 7.87V12h4a3 3 0 0 1 3 3v3h2a1 1 0 0 1 .7 1.7l-3 3-.1.1a1 1 0 0 1-.3.16h-.05l-.05.02h-.03a1 1 0 0 1-.34 0h-.03l-.05-.01-.04-.01a1 1 0 0 1-.42-.25l-3-3A1 1 0 0 1 16 18h2v-3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v3h2a1 1 0 0 1 .7 1.7l-3 3-.1.1a1 1 0 0 1-.3.16h-.05l-.05.02h-.03a1 1 0 0 1-.34 0H4.8l-.05-.01-.04-.01a1 1 0 0 1-.42-.25l-3-3A1 1 0 0 1 2 18h2v-3a3 3 0 0 1 3-3h4V8.87A4 4 0 0 1 12 1" />
    </IconBase>
  ))
);

FlowSplitArrowDownFill.displayName = 'FlowSplitArrowDownFill';

// Triple export pattern (lucide-react style)
export { FlowSplitArrowDownFill, FlowSplitArrowDownFill as FlowSplitArrowDownFillIcon, FlowSplitArrowDownFill as SiFlowSplitArrowDownFill };
export default FlowSplitArrowDownFill;
export type { FlowSplitArrowDownFillProps };
