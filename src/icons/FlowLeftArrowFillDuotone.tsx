import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowLeftArrowFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowLeftArrowFillDuotone = memo(
  forwardRef<SVGSVGElement, FlowLeftArrowFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-left-arrow-fill-duotone" {...props}>
      <path d="M13.1 11a5 5 0 0 0 0 2H4.41l-1-1 1-1z" opacity={.4} />
        <path d="M6.3 6.3a1 1 0 1 1 1.4 1.4L3.42 12l4.3 4.3a1 1 0 0 1-1.42 1.4l-5-5a1 1 0 0 1 0-1.4zM18 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10" />
    </IconBase>
  ))
);

FlowLeftArrowFillDuotone.displayName = 'FlowLeftArrowFillDuotone';

// Triple export pattern (lucide-react style)
export { FlowLeftArrowFillDuotone, FlowLeftArrowFillDuotone as FlowLeftArrowFillDuotoneIcon, FlowLeftArrowFillDuotone as SiFlowLeftArrowFillDuotone };
export default FlowLeftArrowFillDuotone;
export type { FlowLeftArrowFillDuotoneProps };
