import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowUpArrowFillProps = Omit<IconBaseProps, 'children'>;

const FlowUpArrowFill = memo(
  forwardRef<SVGSVGElement, FlowUpArrowFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M6.3 7.7a1 1 0 0 1 0-1.4l5-5a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1-1.4 1.4L13 4.42v8.7a5 5 0 1 1-2 0V4.4l-3.3 3.3a1 1 0 0 1-1.4 0" />
    </IconBase>
  ))
);

FlowUpArrowFill.displayName = 'FlowUpArrowFill';

// Triple export pattern (lucide-react style)
export { FlowUpArrowFill, FlowUpArrowFill as FlowUpArrowFillIcon, FlowUpArrowFill as SiFlowUpArrowFill };
export type { FlowUpArrowFillProps };
