import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowRightArrowFillProps = Omit<IconBaseProps, 'children'>;

const FlowRightArrowFill = memo(
  forwardRef<SVGSVGElement, FlowRightArrowFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-right-arrow-fill" {...props}>
      <path fill="currentColor" d="M16.3 6.3a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 1 1-1.4-1.4l3.29-3.3h-8.7a5 5 0 1 1 0-2h8.7l-3.3-3.3a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

FlowRightArrowFill.displayName = 'FlowRightArrowFill';

// Triple export pattern (lucide-react style)
export { FlowRightArrowFill, FlowRightArrowFill as FlowRightArrowFillIcon, FlowRightArrowFill as SiFlowRightArrowFill };
export default FlowRightArrowFill;
export type { FlowRightArrowFillProps };
