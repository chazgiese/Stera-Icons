import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowMergeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowMergeRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlowMergeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.97 13.97a.75.75 0 1 1 1.06 1.06l-6.5 6.5a.75.75 0 1 1-1.06-1.06zM1.47 2.47c.3-.3.77-.3 1.06 0l7.24 7.24a5.3 5.3 0 0 0 3.72 1.54h5.7l.78.78-.73.72h-5.75c-1.8 0-3.51-.71-4.78-1.98L1.47 3.53a.75.75 0 0 1 0-1.06" opacity={0.4} />
        <path fill="currentColor" d="M16.97 7.97c.3-.3.77-.3 1.06 0l3.54 3.53.09.12a.75.75 0 0 1-.1.95l-3.53 3.47a.75.75 0 0 1-1.05-1.08l2.99-2.93-3-3a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

FlowMergeRegularDuotone.displayName = 'FlowMergeRegularDuotone';

// Triple export pattern (lucide-react style)
export { FlowMergeRegularDuotone, FlowMergeRegularDuotone as FlowMergeRegularDuotoneIcon, FlowMergeRegularDuotone as SiFlowMergeRegularDuotone };
export type { FlowMergeRegularDuotoneProps };
