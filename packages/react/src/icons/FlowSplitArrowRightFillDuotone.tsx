import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitArrowRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowRightFillDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M18 4v2h-3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3v2h-3a3 3 0 0 1-3-3v-4H8.87a4 4 0 0 0 0-2H12V7a3 3 0 0 1 3-3z" opacity={.4} />
        <path fill="currentColor" d="M18 8a1 1 0 0 0 1.7.7l3-3a1 1 0 0 0 0-1.4l-3-3A1 1 0 0 0 18 2zM18 22a1 1 0 0 0 1.7.7l3-3a1 1 0 0 0 0-1.4l-3-3a1 1 0 0 0-1.7.7zM1 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0" />
    </IconBase>
  ))
);

FlowSplitArrowRightFillDuotone.displayName = 'FlowSplitArrowRightFillDuotone';

// Triple export pattern (lucide-react style)
export { FlowSplitArrowRightFillDuotone, FlowSplitArrowRightFillDuotone as FlowSplitArrowRightFillDuotoneIcon, FlowSplitArrowRightFillDuotone as SiFlowSplitArrowRightFillDuotone };
export type { FlowSplitArrowRightFillDuotoneProps };
