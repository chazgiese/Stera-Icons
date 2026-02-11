import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitArrowUpRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowUpRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowUpRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-arrow-up-duotone" {...props}>
      <path d="M19.75 3.81V9A2.75 2.75 0 0 1 17 11.75h-4.25v3.57a4 4 0 0 0-1.5 0v-3.57H7A2.75 2.75 0 0 1 4.25 9V3.81L5 3.06l.75.75V9c0 .69.56 1.25 1.25 1.25h10c.69 0 1.25-.56 1.25-1.25V3.81l.75-.75z" opacity={.4} />
        <path fillRule="evenodd" d="M12 15.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
        <path d="M5 1.25q.31 0 .53.22l3 3a.75.75 0 0 1-1.06 1.06L5 3.06 2.53 5.53a.75.75 0 0 1-1.06-1.06l3-3 .11-.1A1 1 0 0 1 5 1.26M19 1.25q.31 0 .53.22l3 3a.75.75 0 0 1-1.06 1.06L19 3.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06l3-3 .11-.1a1 1 0 0 1 .42-.12" />
    </IconBase>
  ))
);

FlowSplitArrowUpRegularDuotone.displayName = 'FlowSplitArrowUpRegularDuotone';

// Triple export pattern (lucide-react style)
export { FlowSplitArrowUpRegularDuotone, FlowSplitArrowUpRegularDuotone as FlowSplitArrowUpRegularDuotoneIcon, FlowSplitArrowUpRegularDuotone as SiFlowSplitArrowUpRegularDuotone };
export default FlowSplitArrowUpRegularDuotone;
export type { FlowSplitArrowUpRegularDuotoneProps };
