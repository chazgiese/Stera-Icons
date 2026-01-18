import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitUpRegularProps = Omit<IconBaseProps, 'children'>;

const FlowSplitUpRegular = memo(
  forwardRef<SVGSVGElement, FlowSplitUpRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M1.25 5a3.75 3.75 0 0 0 3 3.67V10A2.75 2.75 0 0 0 7 12.75h4.25v2.58a3.75 3.75 0 1 0 1.5 0v-2.58H17A2.75 2.75 0 0 0 19.75 10V8.67a3.75 3.75 0 1 0-1.5 0V10c0 .69-.56 1.25-1.25 1.25H7c-.69 0-1.25-.56-1.25-1.25V8.67A3.75 3.75 0 1 0 1.25 5m15.5 0a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0m-7 14a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0m-7-14a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitUpRegular.displayName = 'FlowSplitUpRegular';

// Triple export pattern (lucide-react style)
export { FlowSplitUpRegular, FlowSplitUpRegular as FlowSplitUpRegularIcon, FlowSplitUpRegular as SiFlowSplitUpRegular };
export type { FlowSplitUpRegularProps };
