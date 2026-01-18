import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitSquareRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitSquareRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitSquareRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M15 4v2h-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1v2h-1a3 3 0 0 1-3-3v-4H8.87a4 4 0 0 0 0-2H11V7a3 3 0 0 1 3-3z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M15 6.5A2.5 2.5 0 0 0 17.5 9h3A2.5 2.5 0 0 0 23 6.5v-3A2.5 2.5 0 0 0 20.5 1h-3A2.5 2.5 0 0 0 15 3.5zm2-3c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zM15 20.5a2.5 2.5 0 0 0 2.5 2.5h3a2.5 2.5 0 0 0 2.5-2.5v-3a2.5 2.5 0 0 0-2.5-2.5h-3a2.5 2.5 0 0 0-2.5 2.5zm2-3c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zM1 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0m2 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitSquareRightBoldDuotone.displayName = 'FlowSplitSquareRightBoldDuotone';

// Triple export pattern (lucide-react style)
export { FlowSplitSquareRightBoldDuotone, FlowSplitSquareRightBoldDuotone as FlowSplitSquareRightBoldDuotoneIcon, FlowSplitSquareRightBoldDuotone as SiFlowSplitSquareRightBoldDuotone };
export type { FlowSplitSquareRightBoldDuotoneProps };
