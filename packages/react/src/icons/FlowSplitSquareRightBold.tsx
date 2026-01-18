import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitSquareRightBoldProps = Omit<IconBaseProps, 'children'>;

const FlowSplitSquareRightBold = memo(
  forwardRef<SVGSVGElement, FlowSplitSquareRightBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M1 12a4 4 0 0 0 7.87 1H11v4a3 3 0 0 0 3 3h1v.5a2.5 2.5 0 0 0 2.5 2.5h3a2.5 2.5 0 0 0 2.5-2.5v-3a2.5 2.5 0 0 0-2.5-2.5h-3a2.5 2.5 0 0 0-2.5 2.5v.5h-1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1v.5A2.5 2.5 0 0 0 17.5 9h3A2.5 2.5 0 0 0 23 6.5v-3A2.5 2.5 0 0 0 20.5 1h-3A2.5 2.5 0 0 0 15 3.5V4h-1a3 3 0 0 0-3 3v4H8.87A4 4 0 0 0 1 12m16-8.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm0 14c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zM3 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitSquareRightBold.displayName = 'FlowSplitSquareRightBold';

// Triple export pattern (lucide-react style)
export { FlowSplitSquareRightBold, FlowSplitSquareRightBold as FlowSplitSquareRightBoldIcon, FlowSplitSquareRightBold as SiFlowSplitSquareRightBold };
export type { FlowSplitSquareRightBoldProps };
