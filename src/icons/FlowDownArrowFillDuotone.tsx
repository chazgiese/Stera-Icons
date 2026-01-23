import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowDownArrowFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowDownArrowFillDuotone = memo(
  forwardRef<SVGSVGElement, FlowDownArrowFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-down-arrow-fill-duotone" {...props}>
      <path fill="currentColor" d="m13 19.59-1 1-1-1v-8.7a5 5 0 0 0 2 0z" opacity={.4} />
        <path fill="currentColor" d="M16.3 16.3a1 1 0 0 1 1.4 1.4l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.4l4.3 4.29zM12 1a5 5 0 1 1 0 10 5 5 0 0 1 0-10" />
    </IconBase>
  ))
);

FlowDownArrowFillDuotone.displayName = 'FlowDownArrowFillDuotone';

// Triple export pattern (lucide-react style)
export { FlowDownArrowFillDuotone, FlowDownArrowFillDuotone as FlowDownArrowFillDuotoneIcon, FlowDownArrowFillDuotone as SiFlowDownArrowFillDuotone };
export default FlowDownArrowFillDuotone;
export type { FlowDownArrowFillDuotoneProps };
