import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitRightRegularProps = Omit<IconBaseProps, 'children'>;

const FlowSplitRightRegular = memo(
  forwardRef<SVGSVGElement, FlowSplitRightRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-right" {...props}>
      <path fillRule="evenodd" d="M19 1.25a3.75 3.75 0 0 0-3.67 3H14A2.75 2.75 0 0 0 11.25 7v4.25H8.67a3.75 3.75 0 1 0 0 1.5h2.58V17A2.75 2.75 0 0 0 14 19.75h1.33a3.75 3.75 0 1 0 0-1.5H14c-.69 0-1.25-.56-1.25-1.25V7c0-.69.56-1.25 1.25-1.25h1.33A3.75 3.75 0 1 0 19 1.25m0 15.5a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5m-14-7a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5m14-7a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitRightRegular.displayName = 'FlowSplitRightRegular';

// Triple export pattern (lucide-react style)
export { FlowSplitRightRegular, FlowSplitRightRegular as FlowSplitRightRegularIcon, FlowSplitRightRegular as SiFlowSplitRightRegular };
export default FlowSplitRightRegular;
export type { FlowSplitRightRegularProps };
