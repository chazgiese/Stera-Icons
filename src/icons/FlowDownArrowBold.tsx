import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowDownArrowBoldProps = Omit<IconBaseProps, 'children'>;

const FlowDownArrowBold = memo(
  forwardRef<SVGSVGElement, FlowDownArrowBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-down-arrow-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a5 5 0 0 1 1 9.9v8.69l3.3-3.3a1 1 0 0 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.42l3.3 3.3v-8.7A5 5 0 0 1 12 1m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowDownArrowBold.displayName = 'FlowDownArrowBold';

// Triple export pattern (lucide-react style)
export { FlowDownArrowBold, FlowDownArrowBold as FlowDownArrowBoldIcon, FlowDownArrowBold as SiFlowDownArrowBold };
export default FlowDownArrowBold;
export type { FlowDownArrowBoldProps };
