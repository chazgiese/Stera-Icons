import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitArrowRightRegularProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowRightRegular = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowRightRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-arrow-right" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M1.25 12a3.75 3.75 0 0 0 7.42.75h3.58V17A2.75 2.75 0 0 0 15 19.75h5.19l-1.72 1.72a.75.75 0 0 0 1.06 1.06l3-3 .1-.11q0-.03.02-.05l.04-.08.02-.07.02-.07a1 1 0 0 0 0-.3l-.02-.07q0-.04-.02-.07l-.04-.08-.03-.05-.09-.11-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H15c-.69 0-1.25-.56-1.25-1.25V7c0-.69.56-1.25 1.25-1.25h5.19l-1.72 1.72a.75.75 0 0 0 1.06 1.06l3-3 .1-.11q0-.03.02-.05l.04-.08.02-.07.02-.07a1 1 0 0 0 0-.3v-.04l-.04-.1-.04-.08-.03-.05-.09-.11-3-3a.75.75 0 0 0-1.06 1.06l1.72 1.72H15A2.75 2.75 0 0 0 12.25 7v4.25H8.67a3.75 3.75 0 0 0-7.42.75m1.5 0a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitArrowRightRegular.displayName = 'FlowSplitArrowRightRegular';

// Triple export pattern (lucide-react style)
export { FlowSplitArrowRightRegular, FlowSplitArrowRightRegular as FlowSplitArrowRightRegularIcon, FlowSplitArrowRightRegular as SiFlowSplitArrowRightRegular };
export default FlowSplitArrowRightRegular;
export type { FlowSplitArrowRightRegularProps };
