import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitSquareDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitSquareDownFillDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitSquareDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-square-down-fill-duotone" {...props}>
      <path fill="currentColor" d="M13 11h4a3 3 0 0 1 3 3v1h-2v-1a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1H4v-1a3 3 0 0 1 3-3h4V8.87a4 4 0 0 0 2 0z" opacity={.4} />
        <path fill="currentColor" d="M6.5 15A2.5 2.5 0 0 1 9 17.5v3A2.5 2.5 0 0 1 6.5 23h-3A2.5 2.5 0 0 1 1 20.5v-3A2.5 2.5 0 0 1 3.5 15zM20.5 15a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5h-3a2.5 2.5 0 0 1-2.5-2.5v-3a2.5 2.5 0 0 1 2.5-2.5zM12 1a4 4 0 1 1 0 8 4 4 0 0 1 0-8" />
    </IconBase>
  ))
);

FlowSplitSquareDownFillDuotone.displayName = 'FlowSplitSquareDownFillDuotone';

// Triple export pattern (lucide-react style)
export { FlowSplitSquareDownFillDuotone, FlowSplitSquareDownFillDuotone as FlowSplitSquareDownFillDuotoneIcon, FlowSplitSquareDownFillDuotone as SiFlowSplitSquareDownFillDuotone };
export default FlowSplitSquareDownFillDuotone;
export type { FlowSplitSquareDownFillDuotoneProps };
