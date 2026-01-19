import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitSquareDownRegularProps = Omit<IconBaseProps, 'children'>;

const FlowSplitSquareDownRegular = memo(
  forwardRef<SVGSVGElement, FlowSplitSquareDownRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-square-down" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a3.75 3.75 0 0 1 .75 7.42v2.58H17A2.75 2.75 0 0 1 19.75 14v1.25h.75c1.24 0 2.25 1 2.25 2.25v3c0 1.24-1 2.25-2.25 2.25h-3c-1.24 0-2.25-1-2.25-2.25v-3c0-1.24 1-2.25 2.25-2.25h.75V14c0-.69-.56-1.25-1.25-1.25H7c-.69 0-1.25.56-1.25 1.25v1.25h.75c1.24 0 2.25 1 2.25 2.25v3c0 1.24-1 2.25-2.25 2.25h-3c-1.24 0-2.25-1-2.25-2.25v-3c0-1.24 1-2.25 2.25-2.25h.75V14A2.75 2.75 0 0 1 7 11.25h4.25V8.67A3.75 3.75 0 0 1 12 1.25m-8.5 15.5a.75.75 0 0 0-.75.75v3c0 .41.34.75.75.75h3c.41 0 .75-.34.75-.75v-3a.75.75 0 0 0-.75-.75zm14 0a.75.75 0 0 0-.75.75v3c0 .41.34.75.75.75h3c.41 0 .75-.34.75-.75v-3a.75.75 0 0 0-.75-.75zm-5.5-14a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitSquareDownRegular.displayName = 'FlowSplitSquareDownRegular';

// Triple export pattern (lucide-react style)
export { FlowSplitSquareDownRegular, FlowSplitSquareDownRegular as FlowSplitSquareDownRegularIcon, FlowSplitSquareDownRegular as SiFlowSplitSquareDownRegular };
export type { FlowSplitSquareDownRegularProps };
