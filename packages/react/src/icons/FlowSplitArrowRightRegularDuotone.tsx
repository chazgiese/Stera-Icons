import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitArrowRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="m20.94 5-.75.75H15c-.69 0-1.25.56-1.25 1.25v10c0 .69.56 1.25 1.25 1.25h5.19l.75.75-.75.75H15A2.75 2.75 0 0 1 12.25 17v-4.25H8.67a4 4 0 0 0 0-1.5h3.58V7A2.75 2.75 0 0 1 15 4.25h5.19z" opacity={.4} />
        <path fill="currentColor" d="M18.47 15.47c.3-.3.77-.3 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06-1.06L20.94 19l-2.47-2.47a.75.75 0 0 1 0-1.06" />
        <path fill="currentColor" fillRule="evenodd" d="M5 8.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
        <path fill="currentColor" d="M18.47 1.47c.3-.3.77-.3 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06-1.06L20.94 5l-2.47-2.47a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

FlowSplitArrowRightRegularDuotone.displayName = 'FlowSplitArrowRightRegularDuotone';

// Triple export pattern (lucide-react style)
export { FlowSplitArrowRightRegularDuotone, FlowSplitArrowRightRegularDuotone as FlowSplitArrowRightRegularDuotoneIcon, FlowSplitArrowRightRegularDuotone as SiFlowSplitArrowRightRegularDuotone };
export type { FlowSplitArrowRightRegularDuotoneProps };
