import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitArrowLeftRegularProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowLeftRegular = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-arrow-left" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M22.75 12a3.75 3.75 0 0 1-7.42.75h-3.58V17A2.75 2.75 0 0 1 9 19.75H3.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3-.1-.11q0-.03-.02-.05l-.04-.08-.02-.07-.02-.07a1 1 0 0 1 0-.3l.02-.07q0-.04.02-.07l.04-.08.03-.05.09-.11 3-3a.75.75 0 1 1 1.06 1.06l-1.72 1.72H9c.69 0 1.25-.56 1.25-1.25V7c0-.69-.56-1.25-1.25-1.25H3.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3-.1-.11q0-.03-.02-.05l-.04-.08-.02-.07-.02-.07a1 1 0 0 1 0-.3v-.04l.04-.1.04-.08.03-.05.09-.11 3-3a.75.75 0 0 1 1.06 1.06L3.81 4.25H9A2.75 2.75 0 0 1 11.75 7v4.25h3.58a3.75 3.75 0 0 1 7.42.75m-1.5 0a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitArrowLeftRegular.displayName = 'FlowSplitArrowLeftRegular';

// Triple export pattern (lucide-react style)
export { FlowSplitArrowLeftRegular, FlowSplitArrowLeftRegular as FlowSplitArrowLeftRegularIcon, FlowSplitArrowLeftRegular as SiFlowSplitArrowLeftRegular };
export default FlowSplitArrowLeftRegular;
export type { FlowSplitArrowLeftRegularProps };
