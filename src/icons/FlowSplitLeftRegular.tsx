import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitLeftRegularProps = Omit<IconBaseProps, 'children'>;

const FlowSplitLeftRegular = memo(
  forwardRef<SVGSVGElement, FlowSplitLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-left" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M5 1.25a3.75 3.75 0 0 1 3.67 3H10A2.75 2.75 0 0 1 12.75 7v4.25h2.58a3.75 3.75 0 1 1 0 1.5h-2.58V17A2.75 2.75 0 0 1 10 19.75H8.67a3.75 3.75 0 1 1 0-1.5H10c.69 0 1.25-.56 1.25-1.25V7c0-.69-.56-1.25-1.25-1.25H8.67A3.75 3.75 0 1 1 5 1.25m0 15.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5m14-7a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5m-14-7a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitLeftRegular.displayName = 'FlowSplitLeftRegular';

// Triple export pattern (lucide-react style)
export { FlowSplitLeftRegular, FlowSplitLeftRegular as FlowSplitLeftRegularIcon, FlowSplitLeftRegular as SiFlowSplitLeftRegular };
export default FlowSplitLeftRegular;
export type { FlowSplitLeftRegularProps };
