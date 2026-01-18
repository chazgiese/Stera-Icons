import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitDownBoldProps = Omit<IconBaseProps, 'children'>;

const FlowSplitDownBold = memo(
  forwardRef<SVGSVGElement, FlowSplitDownBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a4 4 0 0 1 1 7.87V11h4a3 3 0 0 1 3 3v1.13a4 4 0 1 1-2 0V14a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1.13a4 4 0 1 1-2 0V14a3 3 0 0 1 3-3h4V8.87A4 4 0 0 1 12 1M5 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4m14 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4M12 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitDownBold.displayName = 'FlowSplitDownBold';

// Triple export pattern (lucide-react style)
export { FlowSplitDownBold, FlowSplitDownBold as FlowSplitDownBoldIcon, FlowSplitDownBold as SiFlowSplitDownBold };
export type { FlowSplitDownBoldProps };
