import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitUpBoldProps = Omit<IconBaseProps, 'children'>;

const FlowSplitUpBold = memo(
  forwardRef<SVGSVGElement, FlowSplitUpBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-up-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M1 5a4 4 0 0 0 3 3.87V10a3 3 0 0 0 3 3h4v2.13a4 4 0 1 0 2 0V13h4a3 3 0 0 0 3-3V8.87a4 4 0 1 0-2 0V10a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8.87A4 4 0 1 0 1 5m16 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0m-7 14a2 2 0 1 1 4 0 2 2 0 0 1-4 0M3 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitUpBold.displayName = 'FlowSplitUpBold';

// Triple export pattern (lucide-react style)
export { FlowSplitUpBold, FlowSplitUpBold as FlowSplitUpBoldIcon, FlowSplitUpBold as SiFlowSplitUpBold };
export type { FlowSplitUpBoldProps };
