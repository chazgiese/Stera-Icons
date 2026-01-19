import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitSquareLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitSquareLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitSquareLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-square-left-bold-duotone" {...props}>
      <path fill="currentColor" d="M10 4a3 3 0 0 1 3 3v4h2.13a4 4 0 0 0 0 2H13v4a3 3 0 0 1-3 3H9v-2h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H9V4z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M9 6.5A2.5 2.5 0 0 1 6.5 9h-3A2.5 2.5 0 0 1 1 6.5v-3A2.5 2.5 0 0 1 3.5 1h3A2.5 2.5 0 0 1 9 3.5zm-2-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5zM9 20.5A2.5 2.5 0 0 1 6.5 23h-3A2.5 2.5 0 0 1 1 20.5v-3A2.5 2.5 0 0 1 3.5 15h3A2.5 2.5 0 0 1 9 17.5zm-2-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5zM23 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-2 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitSquareLeftBoldDuotone.displayName = 'FlowSplitSquareLeftBoldDuotone';

// Triple export pattern (lucide-react style)
export { FlowSplitSquareLeftBoldDuotone, FlowSplitSquareLeftBoldDuotone as FlowSplitSquareLeftBoldDuotoneIcon, FlowSplitSquareLeftBoldDuotone as SiFlowSplitSquareLeftBoldDuotone };
export default FlowSplitSquareLeftBoldDuotone;
export type { FlowSplitSquareLeftBoldDuotoneProps };
