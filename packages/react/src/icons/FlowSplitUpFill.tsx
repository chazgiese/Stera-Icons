import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitUpFillProps = Omit<IconBaseProps, 'children'>;

const FlowSplitUpFill = memo(
  forwardRef<SVGSVGElement, FlowSplitUpFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M1 5a4 4 0 0 0 3 3.87V10a3 3 0 0 0 3 3h4v2.13a4 4 0 1 0 2 0V13h4a3 3 0 0 0 3-3V8.87a4 4 0 1 0-2 0V10a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8.87A4 4 0 1 0 1 5" />
    </IconBase>
  ))
);

FlowSplitUpFill.displayName = 'FlowSplitUpFill';

export { FlowSplitUpFill };
export type { FlowSplitUpFillProps };
