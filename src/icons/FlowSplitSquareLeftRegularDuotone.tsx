import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitSquareLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitSquareLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitSquareLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-split-square-left-duotone" {...props}>
      <path d="M10 4.25A2.75 2.75 0 0 1 12.75 7v4.25h2.58a4 4 0 0 0 0 1.5h-2.58V17c0 1.42-1.08 2.6-2.47 2.74l-.28.01H8.75v-1.5H10c.65 0 1.18-.5 1.24-1.12l.01-.13V7c0-.65-.5-1.18-1.12-1.24L10 5.75H8.75v-1.5z" opacity={.4} />
        <path fillRule="evenodd" d="M6.5 15.25c1.24 0 2.25 1 2.25 2.25v3c0 1.24-1 2.25-2.25 2.25h-3c-1.24 0-2.25-1-2.25-2.25v-3c0-1.24 1-2.25 2.25-2.25zm-3 1.5a.75.75 0 0 0-.75.75v3c0 .41.34.75.75.75h3c.41 0 .75-.34.75-.75v-3.08a.75.75 0 0 0-.67-.67H3.5M19 8.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M6.5 1.25c1.24 0 2.25 1 2.25 2.25v3c0 1.16-.89 2.12-2.02 2.24l-.23.01h-3a2.25 2.25 0 0 1-2.24-2.02l-.01-.23v-3c0-1.24 1-2.25 2.25-2.25zm-3 1.5a.75.75 0 0 0-.75.75v3c0 .41.34.75.75.75h3c.39 0 .7-.3.75-.67V3.42a.75.75 0 0 0-.75-.67z" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitSquareLeftRegularDuotone.displayName = 'FlowSplitSquareLeftRegularDuotone';

// Triple export pattern (lucide-react style)
export { FlowSplitSquareLeftRegularDuotone, FlowSplitSquareLeftRegularDuotone as FlowSplitSquareLeftRegularDuotoneIcon, FlowSplitSquareLeftRegularDuotone as SiFlowSplitSquareLeftRegularDuotone };
export default FlowSplitSquareLeftRegularDuotone;
export type { FlowSplitSquareLeftRegularDuotoneProps };
