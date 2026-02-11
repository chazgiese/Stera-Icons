import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitArrowRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-arrow-right-bold-duotone" {...props}>
      <path d="m19.59 4 1 1-1 1H15.5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4.09l1 1-1 1H15.5a3 3 0 0 1-3-3v-4H8.87a4 4 0 0 0 0-2h3.63V7a3 3 0 0 1 3-3z" opacity={.4} />
        <path d="M18.3 7.3a1 1 0 1 0 1.4 1.4l3-3a1 1 0 0 0 0-1.4l-3-3a1 1 0 0 0-1.4 1.4L20.58 5zM18.3 21.3a1 1 0 1 0 1.4 1.4l3-3a1 1 0 0 0 0-1.4l-3-3a1 1 0 0 0-1.4 1.4l2.29 2.3z" />
        <path fillRule="evenodd" d="M1 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0m2 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitArrowRightBoldDuotone.displayName = 'FlowSplitArrowRightBoldDuotone';

// Triple export pattern (lucide-react style)
export { FlowSplitArrowRightBoldDuotone, FlowSplitArrowRightBoldDuotone as FlowSplitArrowRightBoldDuotoneIcon, FlowSplitArrowRightBoldDuotone as SiFlowSplitArrowRightBoldDuotone };
export default FlowSplitArrowRightBoldDuotone;
export type { FlowSplitArrowRightBoldDuotoneProps };
