import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitArrowDownRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowDownRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowDownRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-arrow-down-duotone" {...props}>
      <path fill="currentColor" d="M12.75 12.25H17A2.75 2.75 0 0 1 19.75 15v5.19l-.75.75-.75-.75V15c0-.69-.56-1.25-1.25-1.25H7c-.69 0-1.25.56-1.25 1.25v5.19l-.75.75-.75-.75V15A2.75 2.75 0 0 1 7 12.25h4.25V8.67a4 4 0 0 0 1.5 0z" opacity={.4} />
        <path fill="currentColor" d="M7.47 18.47a.75.75 0 0 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1.06L5 20.94zM21.47 18.47a.75.75 0 0 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06L19 20.94z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitArrowDownRegularDuotone.displayName = 'FlowSplitArrowDownRegularDuotone';

// Triple export pattern (lucide-react style)
export { FlowSplitArrowDownRegularDuotone, FlowSplitArrowDownRegularDuotone as FlowSplitArrowDownRegularDuotoneIcon, FlowSplitArrowDownRegularDuotone as SiFlowSplitArrowDownRegularDuotone };
export default FlowSplitArrowDownRegularDuotone;
export type { FlowSplitArrowDownRegularDuotoneProps };
