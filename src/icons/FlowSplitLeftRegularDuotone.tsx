import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-left-duotone" {...props}>
      <path d="M10 4.25A2.75 2.75 0 0 1 12.75 7v4.25h2.58a4 4 0 0 0 0 1.5h-2.58V17A2.75 2.75 0 0 1 10 19.75H8.67a4 4 0 0 0 0-1.5H10c.69 0 1.25-.56 1.25-1.25V7c0-.69-.56-1.25-1.25-1.25H8.67a4 4 0 0 0 0-1.5z" opacity={.4} />
        <path fillRule="evenodd" d="M5 15.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M19 8.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M5 1.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitLeftRegularDuotone.displayName = 'FlowSplitLeftRegularDuotone';

// Triple export pattern (lucide-react style)
export { FlowSplitLeftRegularDuotone, FlowSplitLeftRegularDuotone as FlowSplitLeftRegularDuotoneIcon, FlowSplitLeftRegularDuotone as SiFlowSplitLeftRegularDuotone };
export default FlowSplitLeftRegularDuotone;
export type { FlowSplitLeftRegularDuotoneProps };
