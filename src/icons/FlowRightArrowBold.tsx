import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowRightArrowBoldProps = Omit<IconBaseProps, 'children'>;

const FlowRightArrowBold = memo(
  forwardRef<SVGSVGElement, FlowRightArrowBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-right-arrow-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16.3 6.3a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 1 1-1.4-1.4l3.29-3.3h-8.7a5 5 0 1 1 0-2h8.7l-3.3-3.3a1 1 0 0 1 0-1.4M6 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowRightArrowBold.displayName = 'FlowRightArrowBold';

// Triple export pattern (lucide-react style)
export { FlowRightArrowBold, FlowRightArrowBold as FlowRightArrowBoldIcon, FlowRightArrowBold as SiFlowRightArrowBold };
export default FlowRightArrowBold;
export type { FlowRightArrowBoldProps };
