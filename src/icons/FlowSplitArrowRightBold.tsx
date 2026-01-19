import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitArrowRightBoldProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowRightBold = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowRightBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-arrow-right-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M1 12a4 4 0 0 0 7.87 1H12v4a3 3 0 0 0 3 3h4.59l-1.3 1.3a1 1 0 1 0 1.42 1.4l3-3a1 1 0 0 0 .25-.4l.01-.07.01-.03v-.03a1 1 0 0 0 0-.34v-.03l-.01-.05-.01-.04a1 1 0 0 0-.25-.42l-3-3a1 1 0 0 0-1.42 1.42L19.6 18H15a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4.59l-1.3 1.3a1 1 0 1 0 1.42 1.4l3-3a1 1 0 0 0 .25-.4l.01-.07.01-.03v-.03a1 1 0 0 0 0-.34V4.8l-.01-.05-.01-.04a1 1 0 0 0-.25-.42l-3-3a1 1 0 0 0-1.42 1.42L19.6 4H15a3 3 0 0 0-3 3v4H8.87A4 4 0 0 0 1 12m2 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitArrowRightBold.displayName = 'FlowSplitArrowRightBold';

// Triple export pattern (lucide-react style)
export { FlowSplitArrowRightBold, FlowSplitArrowRightBold as FlowSplitArrowRightBoldIcon, FlowSplitArrowRightBold as SiFlowSplitArrowRightBold };
export type { FlowSplitArrowRightBoldProps };
