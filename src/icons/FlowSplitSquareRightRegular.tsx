import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitSquareRightRegularProps = Omit<IconBaseProps, 'children'>;

const FlowSplitSquareRightRegular = memo(
  forwardRef<SVGSVGElement, FlowSplitSquareRightRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-square-right" {...props}>
      <path fillRule="evenodd" d="M1.25 12a3.75 3.75 0 0 0 7.42.75h2.58V17A2.75 2.75 0 0 0 14 19.75h1.25v.75c0 1.24 1 2.25 2.25 2.25h3c1.24 0 2.25-1 2.25-2.25v-3c0-1.24-1-2.25-2.25-2.25h-3c-1.24 0-2.25 1-2.25 2.25v.75H14c-.69 0-1.25-.56-1.25-1.25V7c0-.69.56-1.25 1.25-1.25h1.25v.75c0 1.24 1 2.25 2.25 2.25h3c1.24 0 2.25-1 2.25-2.25v-3c0-1.24-1-2.25-2.25-2.25h-3c-1.24 0-2.25 1-2.25 2.25v.75H14A2.75 2.75 0 0 0 11.25 7v4.25H8.67a3.75 3.75 0 0 0-7.42.75m15.5-8.5c0-.41.34-.75.75-.75h3c.41 0 .75.34.75.75v3c0 .41-.34.75-.75.75h-3a.75.75 0 0 1-.75-.75zm0 14c0-.41.34-.75.75-.75h3c.41 0 .75.34.75.75v3c0 .41-.34.75-.75.75h-3a.75.75 0 0 1-.75-.75zm-14-5.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitSquareRightRegular.displayName = 'FlowSplitSquareRightRegular';

// Triple export pattern (lucide-react style)
export { FlowSplitSquareRightRegular, FlowSplitSquareRightRegular as FlowSplitSquareRightRegularIcon, FlowSplitSquareRightRegular as SiFlowSplitSquareRightRegular };
export default FlowSplitSquareRightRegular;
export type { FlowSplitSquareRightRegularProps };
