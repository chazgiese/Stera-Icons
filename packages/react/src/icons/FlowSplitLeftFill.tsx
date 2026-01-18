import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitLeftFillProps = Omit<IconBaseProps, 'children'>;

const FlowSplitLeftFill = memo(
  forwardRef<SVGSVGElement, FlowSplitLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M5 1a4 4 0 0 1 3.87 3H10a3 3 0 0 1 3 3v4h2.13a4 4 0 1 1 0 2H13v4a3 3 0 0 1-3 3H8.87a4 4 0 1 1 0-2H10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H8.87A4 4 0 1 1 5 1" />
    </IconBase>
  ))
);

FlowSplitLeftFill.displayName = 'FlowSplitLeftFill';

export { FlowSplitLeftFill };
export type { FlowSplitLeftFillProps };
