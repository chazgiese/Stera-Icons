import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitArrowUpFillProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowUpFill = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowUpFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-arrow-up-fill" {...props}>
      <path fill="currentColor" d="M12 23a4 4 0 0 0 1-7.87V12h4a3 3 0 0 0 3-3V6h2a1 1 0 0 0 .7-1.7l-3-3-.1-.1a1 1 0 0 0-.3-.16h-.05l-.05-.02h-.03a1 1 0 0 0-.34 0h-.03l-.05.01-.04.01a1 1 0 0 0-.42.25l-3 3A1 1 0 0 0 16 6h2v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V6h2a1 1 0 0 0 .7-1.7l-3-3-.1-.1a1 1 0 0 0-.3-.16h-.05l-.05-.02h-.03a1 1 0 0 0-.34 0H4.8l-.05.01-.04.01a1 1 0 0 0-.42.25l-3 3A1 1 0 0 0 2 6h2v3a3 3 0 0 0 3 3h4v3.13A4 4 0 0 0 12 23" />
    </IconBase>
  ))
);

FlowSplitArrowUpFill.displayName = 'FlowSplitArrowUpFill';

// Triple export pattern (lucide-react style)
export { FlowSplitArrowUpFill, FlowSplitArrowUpFill as FlowSplitArrowUpFillIcon, FlowSplitArrowUpFill as SiFlowSplitArrowUpFill };
export type { FlowSplitArrowUpFillProps };
