import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-right-bold-duotone" {...props}>
      <path fill="currentColor" d="M15.13 4a4 4 0 0 0 0 2H14a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1.13a4 4 0 0 0 0 2H14a3 3 0 0 1-3-3v-4H8.87a4 4 0 0 0 0-2H11V7a3 3 0 0 1 3-3z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M19 15a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4M5 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4M19 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitRightBoldDuotone.displayName = 'FlowSplitRightBoldDuotone';

// Triple export pattern (lucide-react style)
export { FlowSplitRightBoldDuotone, FlowSplitRightBoldDuotone as FlowSplitRightBoldDuotoneIcon, FlowSplitRightBoldDuotone as SiFlowSplitRightBoldDuotone };
export default FlowSplitRightBoldDuotone;
export type { FlowSplitRightBoldDuotoneProps };
