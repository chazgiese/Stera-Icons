import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowRightArrowBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowRightArrowBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlowRightArrowBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-right-arrow-bold-duotone" {...props}>
      <path fill="currentColor" d="m20.59 12-1 1h-8.7a5 5 0 0 0 0-2h8.7z" opacity={.4} />
        <path fill="currentColor" d="M16.3 6.3a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 1 1-1.4-1.4l4.29-4.3-4.3-4.3a1 1 0 0 1 0-1.4" />
        <path fill="currentColor" fillRule="evenodd" d="M6 7a5 5 0 1 1 0 10A5 5 0 0 1 6 7m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowRightArrowBoldDuotone.displayName = 'FlowRightArrowBoldDuotone';

// Triple export pattern (lucide-react style)
export { FlowRightArrowBoldDuotone, FlowRightArrowBoldDuotone as FlowRightArrowBoldDuotoneIcon, FlowRightArrowBoldDuotone as SiFlowRightArrowBoldDuotone };
export type { FlowRightArrowBoldDuotoneProps };
