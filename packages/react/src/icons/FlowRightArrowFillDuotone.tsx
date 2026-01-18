import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowRightArrowFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowRightArrowFillDuotone = memo(
  forwardRef<SVGSVGElement, FlowRightArrowFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="m20.59 12-1 1h-8.7a5 5 0 0 0 0-2h8.7z" opacity={.4} />
        <path fill="currentColor" d="M16.3 6.3a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 1 1-1.4-1.4l4.29-4.3-4.3-4.3a1 1 0 0 1 0-1.4M6 7a5 5 0 1 1 0 10A5 5 0 0 1 6 7" />
    </IconBase>
  ))
);

FlowRightArrowFillDuotone.displayName = 'FlowRightArrowFillDuotone';

// Triple export pattern (lucide-react style)
export { FlowRightArrowFillDuotone, FlowRightArrowFillDuotone as FlowRightArrowFillDuotoneIcon, FlowRightArrowFillDuotone as SiFlowRightArrowFillDuotone };
export type { FlowRightArrowFillDuotoneProps };
