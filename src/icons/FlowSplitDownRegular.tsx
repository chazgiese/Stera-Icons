import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitDownRegularProps = Omit<IconBaseProps, 'children'>;

const FlowSplitDownRegular = memo(
  forwardRef<SVGSVGElement, FlowSplitDownRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-down" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a3.75 3.75 0 0 1 .75 7.42v2.58H17A2.75 2.75 0 0 1 19.75 14v1.32a3.75 3.75 0 1 1-1.5 0V14c0-.69-.56-1.25-1.25-1.25H7c-.69 0-1.25.56-1.25 1.25v1.32a3.75 3.75 0 1 1-1.5 0V14A2.75 2.75 0 0 1 7 11.25h4.25V8.67A3.75 3.75 0 0 1 12 1.25m-7 15.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5m14 0a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5m-7-14a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitDownRegular.displayName = 'FlowSplitDownRegular';

// Triple export pattern (lucide-react style)
export { FlowSplitDownRegular, FlowSplitDownRegular as FlowSplitDownRegularIcon, FlowSplitDownRegular as SiFlowSplitDownRegular };
export default FlowSplitDownRegular;
export type { FlowSplitDownRegularProps };
