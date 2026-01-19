import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitArrowRightFillProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowRightFill = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowRightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-arrow-right-fill" {...props}>
      <path fill="currentColor" d="M1 12a4 4 0 0 0 7.87 1H12v4a3 3 0 0 0 3 3h3v2a1 1 0 0 0 1.7.7l3-3a1 1 0 0 0 .26-.4v-.05l.02-.05v-.03a1 1 0 0 0 0-.34v-.03l-.01-.05-.01-.04a1 1 0 0 0-.25-.42l-3-3A1 1 0 0 0 18 16v2h-3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3v2a1 1 0 0 0 1.7.7l3-3 .1-.1a1 1 0 0 0 .16-.3v-.05l.02-.05v-.03a1 1 0 0 0 0-.34V4.8l-.01-.05-.01-.04a1 1 0 0 0-.25-.42l-3-3A1 1 0 0 0 18 2v2h-3a3 3 0 0 0-3 3v4H8.87A4 4 0 0 0 1 12" />
    </IconBase>
  ))
);

FlowSplitArrowRightFill.displayName = 'FlowSplitArrowRightFill';

// Triple export pattern (lucide-react style)
export { FlowSplitArrowRightFill, FlowSplitArrowRightFill as FlowSplitArrowRightFillIcon, FlowSplitArrowRightFill as SiFlowSplitArrowRightFill };
export type { FlowSplitArrowRightFillProps };
