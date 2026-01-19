import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitSquareUpRegularProps = Omit<IconBaseProps, 'children'>;

const FlowSplitSquareUpRegular = memo(
  forwardRef<SVGSVGElement, FlowSplitSquareUpRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-square-up" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 22.75a3.75 3.75 0 0 0 .75-7.42v-2.58H17A2.75 2.75 0 0 0 19.75 10V8.75h.75c1.24 0 2.25-1 2.25-2.25v-3c0-1.24-1-2.25-2.25-2.25h-3c-1.24 0-2.25 1-2.25 2.25v3c0 1.24 1 2.25 2.25 2.25h.75V10c0 .69-.56 1.25-1.25 1.25H7c-.69 0-1.25-.56-1.25-1.25V8.75h.75c1.24 0 2.25-1 2.25-2.25v-3c0-1.24-1-2.25-2.25-2.25h-3c-1.24 0-2.25 1-2.25 2.25v3c0 1.24 1 2.25 2.25 2.25h.75V10A2.75 2.75 0 0 0 7 12.75h4.25v2.58a3.75 3.75 0 0 0 .75 7.42M3.5 7.25a.75.75 0 0 1-.75-.75v-3c0-.41.34-.75.75-.75h3c.41 0 .75.34.75.75v3c0 .41-.34.75-.75.75zm14 0a.75.75 0 0 1-.75-.75v-3c0-.41.34-.75.75-.75h3c.41 0 .75.34.75.75v3c0 .41-.34.75-.75.75zm-5.5 14a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitSquareUpRegular.displayName = 'FlowSplitSquareUpRegular';

// Triple export pattern (lucide-react style)
export { FlowSplitSquareUpRegular, FlowSplitSquareUpRegular as FlowSplitSquareUpRegularIcon, FlowSplitSquareUpRegular as SiFlowSplitSquareUpRegular };
export type { FlowSplitSquareUpRegularProps };
