import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitArrowLeftFillProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowLeftFill = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowLeftFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-arrow-left-fill" {...props}>
      <path d="M23 12a4 4 0 0 1-7.87 1H12v4a3 3 0 0 1-3 3H6v2a1 1 0 0 1-1.7.7l-3-3-.1-.1a1 1 0 0 1-.16-.3v-.05l-.02-.05v-.03a1 1 0 0 1 0-.34v-.03l.01-.05.01-.04a1 1 0 0 1 .25-.42l3-3A1 1 0 0 1 6 16v2h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H6v2a1 1 0 0 1-1.7.7l-3-3-.1-.1a1 1 0 0 1-.16-.3v-.05l-.02-.05v-.03a1 1 0 0 1 0-.34V4.8l.01-.05.01-.04a1 1 0 0 1 .25-.42l3-3A1 1 0 0 1 6 2v2h3a3 3 0 0 1 3 3v4h3.13A4 4 0 0 1 23 12" />
    </IconBase>
  ))
);

FlowSplitArrowLeftFill.displayName = 'FlowSplitArrowLeftFill';

// Triple export pattern (lucide-react style)
export { FlowSplitArrowLeftFill, FlowSplitArrowLeftFill as FlowSplitArrowLeftFillIcon, FlowSplitArrowLeftFill as SiFlowSplitArrowLeftFill };
export default FlowSplitArrowLeftFill;
export type { FlowSplitArrowLeftFillProps };
