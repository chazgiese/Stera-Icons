import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitArrowDownBoldProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowDownBold = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowDownBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-arrow-down-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a4 4 0 0 1 1 7.87V12h4a3 3 0 0 1 3 3v4.59l1.3-1.3a1 1 0 0 1 1.4 1.42l-3 3a1 1 0 0 1-.4.25l-.07.01-.03.01h-.03a1 1 0 0 1-.34 0h-.03l-.05-.01-.04-.01a1 1 0 0 1-.42-.25l-3-3a1 1 0 1 1 1.42-1.42L18 19.6V15a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v4.59l1.3-1.3a1 1 0 1 1 1.4 1.42l-3 3a1 1 0 0 1-.4.25l-.07.01-.03.01h-.03a1 1 0 0 1-.34 0H4.8l-.05-.01-.04-.01a1 1 0 0 1-.42-.25l-3-3a1 1 0 1 1 1.42-1.42L4 19.6V15a3 3 0 0 1 3-3h4V8.87A4 4 0 0 1 12 1m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitArrowDownBold.displayName = 'FlowSplitArrowDownBold';

// Triple export pattern (lucide-react style)
export { FlowSplitArrowDownBold, FlowSplitArrowDownBold as FlowSplitArrowDownBoldIcon, FlowSplitArrowDownBold as SiFlowSplitArrowDownBold };
export default FlowSplitArrowDownBold;
export type { FlowSplitArrowDownBoldProps };
