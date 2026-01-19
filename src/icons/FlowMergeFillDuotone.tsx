import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowMergeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowMergeFillDuotone = memo(
  forwardRef<SVGSVGElement, FlowMergeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-merge-fill-duotone" {...props}>
      <path d="M7.8 13.8a1 1 0 0 1 1.4 1.4l-6.5 6.5a1 1 0 0 1-1.4-1.4zM1.3 2.3a1 1 0 0 1 1.4 0l7.25 7.24A5 5 0 0 0 13.49 11h3.01v2h-3.01a7 7 0 0 1-4.95-2.05L1.29 3.71a1 1 0 0 1 0-1.42" opacity={0.4} />
        <path fill="currentColor" d="M17.12 7.58a1 1 0 0 1 1.09.21l3.53 3.54a1 1 0 0 1 0 1.42L18.2 16.2a1 1 0 0 1-1.7-.71v-7a1 1 0 0 1 .62-.92" />
    </IconBase>
  ))
);

FlowMergeFillDuotone.displayName = 'FlowMergeFillDuotone';

// Triple export pattern (lucide-react style)
export { FlowMergeFillDuotone, FlowMergeFillDuotone as FlowMergeFillDuotoneIcon, FlowMergeFillDuotone as SiFlowMergeFillDuotone };
export default FlowMergeFillDuotone;
export type { FlowMergeFillDuotoneProps };
