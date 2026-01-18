import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitSquareLeftFillProps = Omit<IconBaseProps, 'children'>;

const FlowSplitSquareLeftFill = memo(
  forwardRef<SVGSVGElement, FlowSplitSquareLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M23 12a4 4 0 0 1-7.87 1H13v4a3 3 0 0 1-3 3H9v.5A2.5 2.5 0 0 1 6.5 23h-3A2.5 2.5 0 0 1 1 20.5v-3A2.5 2.5 0 0 1 3.5 15h3A2.5 2.5 0 0 1 9 17.5v.5h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H9v.5A2.5 2.5 0 0 1 6.5 9h-3A2.5 2.5 0 0 1 1 6.5v-3A2.5 2.5 0 0 1 3.5 1h3A2.5 2.5 0 0 1 9 3.5V4h1a3 3 0 0 1 3 3v4h2.13A4 4 0 0 1 23 12" />
    </IconBase>
  ))
);

FlowSplitSquareLeftFill.displayName = 'FlowSplitSquareLeftFill';

// Triple export pattern (lucide-react style)
export { FlowSplitSquareLeftFill, FlowSplitSquareLeftFill as FlowSplitSquareLeftFillIcon, FlowSplitSquareLeftFill as SiFlowSplitSquareLeftFill };
export type { FlowSplitSquareLeftFillProps };
