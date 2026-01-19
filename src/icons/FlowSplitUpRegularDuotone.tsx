import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitUpRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitUpRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitUpRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-up-duotone" {...props}>
      <path fill="currentColor" d="m19.75 10-.01.28a2.75 2.75 0 0 1-2.46 2.46l-.28.01h-4.25v2.57a4 4 0 0 0-1.5 0v-2.57H7A2.75 2.75 0 0 1 4.25 10V8.67a4 4 0 0 0 1.5 0V10c0 .69.56 1.25 1.25 1.25h10.13c.63-.07 1.12-.6 1.12-1.25V8.67a4 4 0 0 0 1.5 0z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 15.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M5 1.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M19 1.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitUpRegularDuotone.displayName = 'FlowSplitUpRegularDuotone';

// Triple export pattern (lucide-react style)
export { FlowSplitUpRegularDuotone, FlowSplitUpRegularDuotone as FlowSplitUpRegularDuotoneIcon, FlowSplitUpRegularDuotone as SiFlowSplitUpRegularDuotone };
export default FlowSplitUpRegularDuotone;
export type { FlowSplitUpRegularDuotoneProps };
