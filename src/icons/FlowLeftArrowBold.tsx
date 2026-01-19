import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowLeftArrowBoldProps = Omit<IconBaseProps, 'children'>;

const FlowLeftArrowBold = memo(
  forwardRef<SVGSVGElement, FlowLeftArrowBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-left-arrow-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M6.3 6.3a1 1 0 1 1 1.4 1.4L4.42 11h8.7a5 5 0 1 1 0 2H4.4l3.3 3.3a1 1 0 0 1-1.42 1.4l-5-5a1 1 0 0 1 0-1.4zM18 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowLeftArrowBold.displayName = 'FlowLeftArrowBold';

// Triple export pattern (lucide-react style)
export { FlowLeftArrowBold, FlowLeftArrowBold as FlowLeftArrowBoldIcon, FlowLeftArrowBold as SiFlowLeftArrowBold };
export type { FlowLeftArrowBoldProps };
