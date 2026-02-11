import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowMergeRegularProps = Omit<IconBaseProps, 'children'>;

const FlowMergeRegular = memo(
  forwardRef<SVGSVGElement, FlowMergeRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-merge" {...props}>
      <path d="M8.47 13.47a.75.75 0 1 1 1.06 1.06l-7 7a.75.75 0 0 1-1.06-1.06zM1.47 2.47c.3-.3.77-.3 1.06 0l7.24 7.24a5.3 5.3 0 0 0 3.72 1.54h5.7l-2.22-2.22a.75.75 0 1 1 1.06-1.06l3.54 3.53.09.12a.75.75 0 0 1-.1.95l-3.53 3.47a.75.75 0 0 1-1.05-1.08l2.26-2.21h-5.75c-1.8 0-3.51-.71-4.78-1.98L1.47 3.53a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

FlowMergeRegular.displayName = 'FlowMergeRegular';

// Triple export pattern (lucide-react style)
export { FlowMergeRegular, FlowMergeRegular as FlowMergeRegularIcon, FlowMergeRegular as SiFlowMergeRegular };
export default FlowMergeRegular;
export type { FlowMergeRegularProps };
