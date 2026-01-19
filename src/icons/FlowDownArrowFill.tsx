import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowDownArrowFillProps = Omit<IconBaseProps, 'children'>;

const FlowDownArrowFill = memo(
  forwardRef<SVGSVGElement, FlowDownArrowFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-down-arrow-fill" {...props}>
      <path fill="currentColor" d="M12 1a5 5 0 0 1 1 9.9v8.69l3.3-3.3a1 1 0 0 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.42l3.3 3.3v-8.7A5 5 0 0 1 12 1" />
    </IconBase>
  ))
);

FlowDownArrowFill.displayName = 'FlowDownArrowFill';

// Triple export pattern (lucide-react style)
export { FlowDownArrowFill, FlowDownArrowFill as FlowDownArrowFillIcon, FlowDownArrowFill as SiFlowDownArrowFill };
export default FlowDownArrowFill;
export type { FlowDownArrowFillProps };
