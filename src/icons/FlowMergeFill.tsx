import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowMergeFillProps = Omit<IconBaseProps, 'children'>;

const FlowMergeFill = memo(
  forwardRef<SVGSVGElement, FlowMergeFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-merge-fill" {...props}>
      <path fill="currentColor" d="M7.8 13.8a1 1 0 1 1 1.4 1.4l-6.5 6.5a1 1 0 0 1-1.4-1.4zM1.3 2.3a1 1 0 0 1 1.4 0l7.25 7.24A5 5 0 0 0 13.49 11h3.01V8.5a1 1 0 0 1 1.7-.7l3.54 3.53a1 1 0 0 1 0 1.42L18.2 16.2a1 1 0 0 1-1.7-.71V13h-3.01a7 7 0 0 1-4.95-2.05L1.29 3.71a1 1 0 0 1 0-1.42" />
    </IconBase>
  ))
);

FlowMergeFill.displayName = 'FlowMergeFill';

// Triple export pattern (lucide-react style)
export { FlowMergeFill, FlowMergeFill as FlowMergeFillIcon, FlowMergeFill as SiFlowMergeFill };
export default FlowMergeFill;
export type { FlowMergeFillProps };
