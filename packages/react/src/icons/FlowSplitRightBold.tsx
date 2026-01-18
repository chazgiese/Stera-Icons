import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitRightBoldProps = Omit<IconBaseProps, 'children'>;

const FlowSplitRightBold = memo(
  forwardRef<SVGSVGElement, FlowSplitRightBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19 1a4 4 0 0 0-3.87 3H14a3 3 0 0 0-3 3v4H8.87a4 4 0 1 0 0 2H11v4a3 3 0 0 0 3 3h1.13a4 4 0 1 0 0-2H14a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.13A4 4 0 1 0 19 1m0 16a2 2 0 1 1 0 4 2 2 0 0 1 0-4M5 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4m14-7a2 2 0 1 1 0 4 2 2 0 0 1 0-4" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitRightBold.displayName = 'FlowSplitRightBold';

export { FlowSplitRightBold };
export type { FlowSplitRightBoldProps };
