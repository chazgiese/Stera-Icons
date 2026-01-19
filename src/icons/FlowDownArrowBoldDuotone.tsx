import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowDownArrowBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowDownArrowBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlowDownArrowBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-down-arrow-bold-duotone" {...props}>
      <path fill="currentColor" d="m13 19.59-1 1-1-1v-8.7a5 5 0 0 0 2 0z" opacity={.4} />
        <path fill="currentColor" d="M16.3 16.3a1 1 0 0 1 1.4 1.4l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.4l4.3 4.29z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowDownArrowBoldDuotone.displayName = 'FlowDownArrowBoldDuotone';

// Triple export pattern (lucide-react style)
export { FlowDownArrowBoldDuotone, FlowDownArrowBoldDuotone as FlowDownArrowBoldDuotoneIcon, FlowDownArrowBoldDuotone as SiFlowDownArrowBoldDuotone };
export default FlowDownArrowBoldDuotone;
export type { FlowDownArrowBoldDuotoneProps };
