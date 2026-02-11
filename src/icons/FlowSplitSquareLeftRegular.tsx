import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitSquareLeftRegularProps = Omit<IconBaseProps, 'children'>;

const FlowSplitSquareLeftRegular = memo(
  forwardRef<SVGSVGElement, FlowSplitSquareLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-square-left" {...props}>
      <path fillRule="evenodd" d="M22.75 12a3.75 3.75 0 0 1-7.42.75h-2.58V17A2.75 2.75 0 0 1 10 19.75H8.75v.75c0 1.24-1 2.25-2.25 2.25h-3c-1.24 0-2.25-1-2.25-2.25v-3c0-1.24 1-2.25 2.25-2.25h3c1.24 0 2.25 1 2.25 2.25v.75H10c.69 0 1.25-.56 1.25-1.25V7c0-.69-.56-1.25-1.25-1.25H8.75v.75c0 1.24-1 2.25-2.25 2.25h-3c-1.24 0-2.25-1-2.25-2.25v-3c0-1.24 1-2.25 2.25-2.25h3c1.24 0 2.25 1 2.25 2.25v.75H10A2.75 2.75 0 0 1 12.75 7v4.25h2.58a3.75 3.75 0 0 1 7.42.75M7.25 3.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v3c0 .41.34.75.75.75h3c.41 0 .75-.34.75-.75zm0 14a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v3c0 .41.34.75.75.75h3c.41 0 .75-.34.75-.75zm14-5.5a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitSquareLeftRegular.displayName = 'FlowSplitSquareLeftRegular';

// Triple export pattern (lucide-react style)
export { FlowSplitSquareLeftRegular, FlowSplitSquareLeftRegular as FlowSplitSquareLeftRegularIcon, FlowSplitSquareLeftRegular as SiFlowSplitSquareLeftRegular };
export default FlowSplitSquareLeftRegular;
export type { FlowSplitSquareLeftRegularProps };
