import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitLeftBoldProps = Omit<IconBaseProps, 'children'>;

const FlowSplitLeftBold = memo(
  forwardRef<SVGSVGElement, FlowSplitLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-left-bold" {...props}>
      <path fillRule="evenodd" d="M5 1a4 4 0 0 1 3.87 3H10a3 3 0 0 1 3 3v4h2.13a4 4 0 1 1 0 2H13v4a3 3 0 0 1-3 3H8.87a4 4 0 1 1 0-2H10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H8.87A4 4 0 1 1 5 1m0 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4m14-7a2 2 0 1 0 0 4 2 2 0 0 0 0-4M5 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitLeftBold.displayName = 'FlowSplitLeftBold';

// Triple export pattern (lucide-react style)
export { FlowSplitLeftBold, FlowSplitLeftBold as FlowSplitLeftBoldIcon, FlowSplitLeftBold as SiFlowSplitLeftBold };
export default FlowSplitLeftBold;
export type { FlowSplitLeftBoldProps };
