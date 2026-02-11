import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitDownRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitDownRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitDownRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-down-duotone" {...props}>
      <path d="M12.75 11.25H17A2.75 2.75 0 0 1 19.75 14v1.32a4 4 0 0 0-1.5 0V14c0-.69-.56-1.25-1.25-1.25H7c-.69 0-1.25.56-1.25 1.25v1.32a4 4 0 0 0-1.5 0V14A2.75 2.75 0 0 1 7 11.25h4.25V8.67a4 4 0 0 0 1.5 0z" opacity={.4} />
        <path fillRule="evenodd" d="M5 15.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M19 15.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M12 1.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitDownRegularDuotone.displayName = 'FlowSplitDownRegularDuotone';

// Triple export pattern (lucide-react style)
export { FlowSplitDownRegularDuotone, FlowSplitDownRegularDuotone as FlowSplitDownRegularDuotoneIcon, FlowSplitDownRegularDuotone as SiFlowSplitDownRegularDuotone };
export default FlowSplitDownRegularDuotone;
export type { FlowSplitDownRegularDuotoneProps };
