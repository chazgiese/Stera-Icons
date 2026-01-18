import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitSquareUpFillProps = Omit<IconBaseProps, 'children'>;

const FlowSplitSquareUpFill = memo(
  forwardRef<SVGSVGElement, FlowSplitSquareUpFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 23a4 4 0 0 0 1-7.87V13h4a3 3 0 0 0 3-3V9h.5A2.5 2.5 0 0 0 23 6.5v-3A2.5 2.5 0 0 0 20.5 1h-3A2.5 2.5 0 0 0 15 3.5v3A2.5 2.5 0 0 0 17.5 9h.5v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h.5A2.5 2.5 0 0 0 9 6.5v-3A2.5 2.5 0 0 0 6.5 1h-3A2.5 2.5 0 0 0 1 3.5v3A2.5 2.5 0 0 0 3.5 9H4v1a3 3 0 0 0 3 3h4v2.13A4 4 0 0 0 12 23" />
    </IconBase>
  ))
);

FlowSplitSquareUpFill.displayName = 'FlowSplitSquareUpFill';

export { FlowSplitSquareUpFill };
export type { FlowSplitSquareUpFillProps };
