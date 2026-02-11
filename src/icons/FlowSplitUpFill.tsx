import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitUpFillProps = Omit<IconBaseProps, 'children'>;

const FlowSplitUpFill = memo(
  forwardRef<SVGSVGElement, FlowSplitUpFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-up-fill" {...props}>
      <path d="M1 5a4 4 0 0 0 3 3.87V10a3 3 0 0 0 3 3h4v2.13a4 4 0 1 0 2 0V13h4a3 3 0 0 0 3-3V8.87a4 4 0 1 0-2 0V10a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8.87A4 4 0 1 0 1 5" />
    </IconBase>
  ))
);

FlowSplitUpFill.displayName = 'FlowSplitUpFill';

// Triple export pattern (lucide-react style)
export { FlowSplitUpFill, FlowSplitUpFill as FlowSplitUpFillIcon, FlowSplitUpFill as SiFlowSplitUpFill };
export default FlowSplitUpFill;
export type { FlowSplitUpFillProps };
