import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitSquareRightFillProps = Omit<IconBaseProps, 'children'>;

const FlowSplitSquareRightFill = memo(
  forwardRef<SVGSVGElement, FlowSplitSquareRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M1 12a4 4 0 0 0 7.87 1H11v4a3 3 0 0 0 3 3h1v.5a2.5 2.5 0 0 0 2.5 2.5h3a2.5 2.5 0 0 0 2.5-2.5v-3a2.5 2.5 0 0 0-2.5-2.5h-3a2.5 2.5 0 0 0-2.5 2.5v.5h-1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1v.5A2.5 2.5 0 0 0 17.5 9h3A2.5 2.5 0 0 0 23 6.5v-3A2.5 2.5 0 0 0 20.5 1h-3A2.5 2.5 0 0 0 15 3.5V4h-1a3 3 0 0 0-3 3v4H8.87A4 4 0 0 0 1 12" />
    </IconBase>
  ))
);

FlowSplitSquareRightFill.displayName = 'FlowSplitSquareRightFill';

export { FlowSplitSquareRightFill };
export type { FlowSplitSquareRightFillProps };
