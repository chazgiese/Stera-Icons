import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitArrowLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M9 4.25A2.75 2.75 0 0 1 11.75 7v4.25h3.58a4 4 0 0 0 0 1.5h-3.58V17A2.75 2.75 0 0 1 9 19.75H3.81L3.06 19l.75-.75H9c.69 0 1.25-.56 1.25-1.25V7c0-.69-.56-1.25-1.25-1.25H3.81L3.06 5l.75-.75z" opacity={.4} />
        <path fill="currentColor" d="M4.47 15.47a.75.75 0 1 1 1.06 1.06L3.06 19l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06z" />
        <path fill="currentColor" fillRule="evenodd" d="M19 8.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
        <path fill="currentColor" d="M4.47 1.47a.75.75 0 1 1 1.06 1.06L3.06 5l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06z" />
    </IconBase>
  ))
);

FlowSplitArrowLeftRegularDuotone.displayName = 'FlowSplitArrowLeftRegularDuotone';

export { FlowSplitArrowLeftRegularDuotone };
export type { FlowSplitArrowLeftRegularDuotoneProps };
