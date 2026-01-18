import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowUpArrowBoldProps = Omit<IconBaseProps, 'children'>;

const FlowUpArrowBold = memo(
  forwardRef<SVGSVGElement, FlowUpArrowBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M6.3 7.7a1 1 0 0 1 0-1.4l5-5a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1-1.4 1.4L13 4.42v8.7a5 5 0 1 1-2 0V4.4l-3.3 3.3a1 1 0 0 1-1.4 0M9 18a3 3 0 1 0 6 0 3 3 0 0 0-6 0" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowUpArrowBold.displayName = 'FlowUpArrowBold';

// Triple export pattern (lucide-react style)
export { FlowUpArrowBold, FlowUpArrowBold as FlowUpArrowBoldIcon, FlowUpArrowBold as SiFlowUpArrowBold };
export type { FlowUpArrowBoldProps };
