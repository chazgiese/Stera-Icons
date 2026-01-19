import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitSquareUpRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitSquareUpRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitSquareUpRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-square-up-duotone" {...props}>
      <path fill="currentColor" d="M5.75 10c0 .69.56 1.25 1.25 1.25h10c.69 0 1.25-.56 1.25-1.25V8.75h1.5V10l-.01.28A2.75 2.75 0 0 1 17 12.75h-4.25v2.57a4 4 0 0 0-1.5 0v-2.57H7A2.75 2.75 0 0 1 4.25 10V8.75h1.5z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 15.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M6.5 1.25c1.24 0 2.25 1 2.25 2.25v3l-.01.23a2.25 2.25 0 0 1-2.01 2l-.23.02h-3c-1.24 0-2.25-1-2.25-2.25v-3c0-1.24 1-2.25 2.25-2.25zm-3 1.5a.75.75 0 0 0-.75.75v3c0 .41.34.75.75.75h3.08a.75.75 0 0 0 .67-.75v-3a.75.75 0 0 0-.75-.75zM20.5 1.25c1.24 0 2.25 1 2.25 2.25v3l-.01.23a2.25 2.25 0 0 1-2 2l-.24.02h-3c-1.24 0-2.25-1-2.25-2.25v-3c0-1.24 1-2.25 2.25-2.25zm-3 1.5a.75.75 0 0 0-.75.75v3.08c.04.38.36.67.75.67h3.08a.75.75 0 0 0 .67-.75v-3a.75.75 0 0 0-.75-.75z" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitSquareUpRegularDuotone.displayName = 'FlowSplitSquareUpRegularDuotone';

// Triple export pattern (lucide-react style)
export { FlowSplitSquareUpRegularDuotone, FlowSplitSquareUpRegularDuotone as FlowSplitSquareUpRegularDuotoneIcon, FlowSplitSquareUpRegularDuotone as SiFlowSplitSquareUpRegularDuotone };
export type { FlowSplitSquareUpRegularDuotoneProps };
