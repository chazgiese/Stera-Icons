import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitArrowDownRegularProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowDownRegular = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowDownRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-arrow-down" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a3.75 3.75 0 0 1 .75 7.42v3.58H17A2.75 2.75 0 0 1 19.75 15v5.19l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3-.11.1q-.03 0-.05.02l-.08.04-.07.02-.07.02a1 1 0 0 1-.3 0l-.07-.02q-.03 0-.07-.02l-.08-.04-.05-.03-.11-.09-3-3a.75.75 0 0 1 1.06-1.06l1.72 1.72V15c0-.69-.56-1.25-1.25-1.25H7c-.69 0-1.25.56-1.25 1.25v5.19l1.72-1.72a.75.75 0 0 1 1.06 1.06l-3 3-.11.1q-.02 0-.05.02l-.08.04-.07.02-.07.02a1 1 0 0 1-.3 0h-.04l-.1-.04-.08-.04-.05-.03-.11-.09-3-3a.75.75 0 0 1 1.06-1.06l1.72 1.72V15A2.75 2.75 0 0 1 7 12.25h4.25V8.67A3.75 3.75 0 0 1 12 1.25m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitArrowDownRegular.displayName = 'FlowSplitArrowDownRegular';

// Triple export pattern (lucide-react style)
export { FlowSplitArrowDownRegular, FlowSplitArrowDownRegular as FlowSplitArrowDownRegularIcon, FlowSplitArrowDownRegular as SiFlowSplitArrowDownRegular };
export default FlowSplitArrowDownRegular;
export type { FlowSplitArrowDownRegularProps };
