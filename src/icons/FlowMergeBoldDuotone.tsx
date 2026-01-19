import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowMergeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowMergeBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlowMergeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-merge-bold-duotone" {...props}>
      <path d="M7.8 13.8a1 1 0 0 1 1.4 1.4l-6.5 6.5a1 1 0 0 1-1.4-1.4zM1.3 2.3a1 1 0 0 1 1.4 0l7.25 7.24A5 5 0 0 0 13.49 11h5.1l1.02 1.03-.99.97H13.5a7 7 0 0 1-4.95-2.05L1.29 3.71a1 1 0 0 1 0-1.42" opacity={0.4} />
        <path fill="currentColor" d="M16.8 7.8a1 1 0 0 1 1.4 0l3.54 3.53a1 1 0 0 1 0 1.42L18.2 16.2a1 1 0 1 1-1.4-1.42l2.81-2.76L16.8 9.2a1 1 0 0 1 0-1.42" />
    </IconBase>
  ))
);

FlowMergeBoldDuotone.displayName = 'FlowMergeBoldDuotone';

// Triple export pattern (lucide-react style)
export { FlowMergeBoldDuotone, FlowMergeBoldDuotone as FlowMergeBoldDuotoneIcon, FlowMergeBoldDuotone as SiFlowMergeBoldDuotone };
export type { FlowMergeBoldDuotoneProps };
