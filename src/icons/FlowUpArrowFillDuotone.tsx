import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowUpArrowFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowUpArrowFillDuotone = memo(
  forwardRef<SVGSVGElement, FlowUpArrowFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-up-arrow-fill-duotone" {...props}>
      <path fill="currentColor" d="M13 4.41v8.69a5 5 0 0 0-2 0V4.41l1-1z" opacity={.4} />
        <path fill="currentColor" d="M6.3 7.7a1 1 0 0 1 0-1.4l5-5a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1-1.4 1.4L12 3.42l-4.3 4.3a1 1 0 0 1-1.4 0M7 18a5 5 0 1 1 10 0 5 5 0 0 1-10 0" />
    </IconBase>
  ))
);

FlowUpArrowFillDuotone.displayName = 'FlowUpArrowFillDuotone';

// Triple export pattern (lucide-react style)
export { FlowUpArrowFillDuotone, FlowUpArrowFillDuotone as FlowUpArrowFillDuotoneIcon, FlowUpArrowFillDuotone as SiFlowUpArrowFillDuotone };
export default FlowUpArrowFillDuotone;
export type { FlowUpArrowFillDuotoneProps };
