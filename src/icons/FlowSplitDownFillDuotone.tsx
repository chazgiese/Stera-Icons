import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitDownFillDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-down-fill-duotone" {...props}>
      <path fill="currentColor" d="M13 11h4a3 3 0 0 1 3 3v1.13a4 4 0 0 0-2 0V14a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1.13a4 4 0 0 0-2 0V14a3 3 0 0 1 3-3h4V8.87a4 4 0 0 0 2 0z" opacity={.4} />
        <path fill="currentColor" d="M5 15a4 4 0 1 1 0 8 4 4 0 0 1 0-8M19 15a4 4 0 1 1 0 8 4 4 0 0 1 0-8M12 1a4 4 0 1 1 0 8 4 4 0 0 1 0-8" />
    </IconBase>
  ))
);

FlowSplitDownFillDuotone.displayName = 'FlowSplitDownFillDuotone';

// Triple export pattern (lucide-react style)
export { FlowSplitDownFillDuotone, FlowSplitDownFillDuotone as FlowSplitDownFillDuotoneIcon, FlowSplitDownFillDuotone as SiFlowSplitDownFillDuotone };
export type { FlowSplitDownFillDuotoneProps };
