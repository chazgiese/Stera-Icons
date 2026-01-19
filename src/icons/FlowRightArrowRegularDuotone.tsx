import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowRightArrowRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowRightArrowRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlowRightArrowRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-right-arrow-duotone" {...props}>
      <path fill="currentColor" d="m20.94 12-.75.75h-9.5a5 5 0 0 0 0-1.5h9.5z" opacity={.4} />
        <path fill="currentColor" d="M16.47 6.47c.3-.3.77-.3 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06L20.94 12l-4.47-4.47a.75.75 0 0 1 0-1.06" />
        <path fill="currentColor" fillRule="evenodd" d="M6 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5m0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowRightArrowRegularDuotone.displayName = 'FlowRightArrowRegularDuotone';

// Triple export pattern (lucide-react style)
export { FlowRightArrowRegularDuotone, FlowRightArrowRegularDuotone as FlowRightArrowRegularDuotoneIcon, FlowRightArrowRegularDuotone as SiFlowRightArrowRegularDuotone };
export default FlowRightArrowRegularDuotone;
export type { FlowRightArrowRegularDuotoneProps };
