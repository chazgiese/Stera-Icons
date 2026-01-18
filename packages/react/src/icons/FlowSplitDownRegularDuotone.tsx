import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitDownRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitDownRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitDownRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12.75 11.25H17A2.75 2.75 0 0 1 19.75 14v1.32a4 4 0 0 0-1.5 0V14c0-.69-.56-1.25-1.25-1.25H7c-.69 0-1.25.56-1.25 1.25v1.32a4 4 0 0 0-1.5 0V14A2.75 2.75 0 0 1 7 11.25h4.25V8.67a4 4 0 0 0 1.5 0z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M5 15.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M19 15.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M12 1.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitDownRegularDuotone.displayName = 'FlowSplitDownRegularDuotone';

// Triple export pattern (lucide-react style)
export { FlowSplitDownRegularDuotone, FlowSplitDownRegularDuotone as FlowSplitDownRegularDuotoneIcon, FlowSplitDownRegularDuotone as SiFlowSplitDownRegularDuotone };
export type { FlowSplitDownRegularDuotoneProps };
