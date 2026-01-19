import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-right-duotone" {...props}>
      <path fill="currentColor" d="M15.33 4.25a4 4 0 0 0 0 1.5H14c-.69 0-1.25.56-1.25 1.25v10c0 .69.56 1.25 1.25 1.25h1.33a4 4 0 0 0 0 1.5H14A2.75 2.75 0 0 1 11.25 17v-4.25H8.67a4 4 0 0 0 0-1.5h2.58V7A2.75 2.75 0 0 1 14 4.25z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M19 15.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M5 8.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M19 1.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitRightRegularDuotone.displayName = 'FlowSplitRightRegularDuotone';

// Triple export pattern (lucide-react style)
export { FlowSplitRightRegularDuotone, FlowSplitRightRegularDuotone as FlowSplitRightRegularDuotoneIcon, FlowSplitRightRegularDuotone as SiFlowSplitRightRegularDuotone };
export default FlowSplitRightRegularDuotone;
export type { FlowSplitRightRegularDuotoneProps };
