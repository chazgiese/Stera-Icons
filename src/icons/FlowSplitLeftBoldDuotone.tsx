import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-left-bold-duotone" {...props}>
      <path d="M10 4a3 3 0 0 1 3 3v4h2.13a4 4 0 0 0 0 2H13v4a3 3 0 0 1-3 3H8.87a4 4 0 0 0 0-2H10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H8.87a4 4 0 0 0 0-2z" opacity={.4} />
        <path fillRule="evenodd" d="M5 15a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4M19 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4M5 1a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitLeftBoldDuotone.displayName = 'FlowSplitLeftBoldDuotone';

// Triple export pattern (lucide-react style)
export { FlowSplitLeftBoldDuotone, FlowSplitLeftBoldDuotone as FlowSplitLeftBoldDuotoneIcon, FlowSplitLeftBoldDuotone as SiFlowSplitLeftBoldDuotone };
export default FlowSplitLeftBoldDuotone;
export type { FlowSplitLeftBoldDuotoneProps };
