import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitArrowDownBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowDownBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowDownBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-arrow-down-bold-duotone" {...props}>
      <path fill="currentColor" d="M13 12h4a3 3 0 0 1 3 3v4.59l-1 1-1-1V15a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v4.59l-1 1-1-1V15a3 3 0 0 1 3-3h4V8.87a4 4 0 0 0 2 0z" opacity={.4} />
        <path fill="currentColor" d="M7.3 18.3a1 1 0 1 1 1.4 1.4l-3 3a1 1 0 0 1-1.4 0l-3-3a1 1 0 1 1 1.4-1.4L5 20.58zM21.3 18.3a1 1 0 0 1 1.4 1.4l-3 3a1 1 0 0 1-1.4 0l-3-3a1 1 0 1 1 1.4-1.4l2.3 2.29z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitArrowDownBoldDuotone.displayName = 'FlowSplitArrowDownBoldDuotone';

// Triple export pattern (lucide-react style)
export { FlowSplitArrowDownBoldDuotone, FlowSplitArrowDownBoldDuotone as FlowSplitArrowDownBoldDuotoneIcon, FlowSplitArrowDownBoldDuotone as SiFlowSplitArrowDownBoldDuotone };
export type { FlowSplitArrowDownBoldDuotoneProps };
