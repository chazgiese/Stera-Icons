import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowSplitSquareDownRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitSquareDownRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitSquareDownRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12.75 11.25H17A2.75 2.75 0 0 1 19.75 14v1.25h-1.5V14c0-.69-.56-1.25-1.25-1.25H7c-.69 0-1.25.56-1.25 1.25v1.25h-1.5V14A2.75 2.75 0 0 1 7 11.25h4.25V8.67a4 4 0 0 0 1.5 0z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M6.73 15.26a2.25 2.25 0 0 1 2.02 2.24v3l-.01.23a2.25 2.25 0 0 1-2.24 2.02h-3c-1.24 0-2.25-1-2.25-2.25v-3c0-1.24 1-2.25 2.25-2.25h3zM3.5 16.75a.75.75 0 0 0-.75.75v3c0 .41.34.75.75.75h3.08a.75.75 0 0 0 .67-.75v-3a.75.75 0 0 0-.75-.75zM20.73 15.26a2.25 2.25 0 0 1 2.02 2.24v3l-.01.23a2.25 2.25 0 0 1-2.24 2.02h-3c-1.24 0-2.25-1-2.25-2.25v-3c0-1.24 1-2.25 2.25-2.25h3zm-3.23 1.49a.75.75 0 0 0-.75.75v3.08c.04.38.36.67.75.67h3.08a.75.75 0 0 0 .67-.75v-3a.75.75 0 0 0-.75-.75zM12 1.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitSquareDownRegularDuotone.displayName = 'FlowSplitSquareDownRegularDuotone';

// Triple export pattern (lucide-react style)
export { FlowSplitSquareDownRegularDuotone, FlowSplitSquareDownRegularDuotone as FlowSplitSquareDownRegularDuotoneIcon, FlowSplitSquareDownRegularDuotone as SiFlowSplitSquareDownRegularDuotone };
export type { FlowSplitSquareDownRegularDuotoneProps };
