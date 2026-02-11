import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowMergeBoldProps = Omit<IconBaseProps, 'children'>;

const FlowMergeBold = memo(
  forwardRef<SVGSVGElement, FlowMergeBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-merge-bold" {...props}>
      <path d="M7.8 13.8a1 1 0 1 1 1.4 1.4l-6.5 6.5a1 1 0 0 1-1.4-1.4zM1.3 2.3a1 1 0 0 1 1.4 0l7.25 7.24A5 5 0 0 0 13.49 11h5.1l-1.8-1.8a1 1 0 0 1 1.42-1.4l3.53 3.53a1 1 0 0 1 0 1.42L18.2 16.2a1 1 0 1 1-1.4-1.42L18.62 13H13.5a7 7 0 0 1-4.95-2.05L1.29 3.71a1 1 0 0 1 0-1.42" />
    </IconBase>
  ))
);

FlowMergeBold.displayName = 'FlowMergeBold';

// Triple export pattern (lucide-react style)
export { FlowMergeBold, FlowMergeBold as FlowMergeBoldIcon, FlowMergeBold as SiFlowMergeBold };
export default FlowMergeBold;
export type { FlowMergeBoldProps };
