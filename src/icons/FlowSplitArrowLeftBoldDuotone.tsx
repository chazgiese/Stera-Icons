import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitArrowLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-arrow-left-bold-duotone" {...props}>
      <path fill="currentColor" d="M9 4a3 3 0 0 1 3 3v4h3.13a4 4 0 0 0 0 2H12v4a3 3 0 0 1-3 3H4.41l-1-1 1-1H9a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H4.41l-1-1 1-1z" opacity={.4} />
        <path fill="currentColor" d="M5.7 7.3a1 1 0 1 1-1.4 1.4l-3-3a1 1 0 0 1 0-1.4l3-3a1 1 0 0 1 1.4 1.4L3.42 5zM5.7 21.3a1 1 0 1 1-1.4 1.4l-3-3a1 1 0 0 1 0-1.4l3-3a1 1 0 1 1 1.4 1.4L3.42 19z" />
        <path fill="currentColor" fillRule="evenodd" d="M23 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-2 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitArrowLeftBoldDuotone.displayName = 'FlowSplitArrowLeftBoldDuotone';

// Triple export pattern (lucide-react style)
export { FlowSplitArrowLeftBoldDuotone, FlowSplitArrowLeftBoldDuotone as FlowSplitArrowLeftBoldDuotoneIcon, FlowSplitArrowLeftBoldDuotone as SiFlowSplitArrowLeftBoldDuotone };
export default FlowSplitArrowLeftBoldDuotone;
export type { FlowSplitArrowLeftBoldDuotoneProps };
