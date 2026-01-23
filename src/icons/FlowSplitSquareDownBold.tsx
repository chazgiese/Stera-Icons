import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitSquareDownBoldProps = Omit<IconBaseProps, 'children'>;

const FlowSplitSquareDownBold = memo(
  forwardRef<SVGSVGElement, FlowSplitSquareDownBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-square-down-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a4 4 0 0 1 1 7.87V11h4a3 3 0 0 1 3 3v1h.5a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5h-3a2.5 2.5 0 0 1-2.5-2.5v-3a2.5 2.5 0 0 1 2.5-2.5h.5v-1a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1h.5A2.5 2.5 0 0 1 9 17.5v3A2.5 2.5 0 0 1 6.5 23h-3A2.5 2.5 0 0 1 1 20.5v-3A2.5 2.5 0 0 1 3.5 15H4v-1a3 3 0 0 1 3-3h4V8.87A4 4 0 0 1 12 1M3.5 17a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm14 0a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM12 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitSquareDownBold.displayName = 'FlowSplitSquareDownBold';

// Triple export pattern (lucide-react style)
export { FlowSplitSquareDownBold, FlowSplitSquareDownBold as FlowSplitSquareDownBoldIcon, FlowSplitSquareDownBold as SiFlowSplitSquareDownBold };
export default FlowSplitSquareDownBold;
export type { FlowSplitSquareDownBoldProps };
