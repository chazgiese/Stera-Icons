import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitArrowLeftBoldProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowLeftBold = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-arrow-left-bold" {...props}>
      <path fillRule="evenodd" d="M23 12a4 4 0 0 1-7.87 1H12v4a3 3 0 0 1-3 3H4.41l1.3 1.3a1 1 0 1 1-1.42 1.4l-3-3a1 1 0 0 1-.24-.4l-.02-.07v-.03l-.01-.03a1 1 0 0 1 0-.34v-.03l.01-.05.01-.04a1 1 0 0 1 .25-.42l3-3a1 1 0 1 1 1.42 1.42L4.4 18H9a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H4.41l1.3 1.3a1 1 0 1 1-1.42 1.4l-3-3a1 1 0 0 1-.24-.4l-.02-.07V5.2l-.01-.03a1 1 0 0 1 0-.34V4.8l.01-.05.01-.04a1 1 0 0 1 .25-.42l3-3a1 1 0 0 1 1.42 1.42L4.4 4H9a3 3 0 0 1 3 3v4h3.13A4 4 0 0 1 23 12m-2 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitArrowLeftBold.displayName = 'FlowSplitArrowLeftBold';

// Triple export pattern (lucide-react style)
export { FlowSplitArrowLeftBold, FlowSplitArrowLeftBold as FlowSplitArrowLeftBoldIcon, FlowSplitArrowLeftBold as SiFlowSplitArrowLeftBold };
export default FlowSplitArrowLeftBold;
export type { FlowSplitArrowLeftBoldProps };
