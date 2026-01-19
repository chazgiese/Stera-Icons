import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type NodeMapFillProps = Omit<IconBaseProps, 'children'>;

const NodeMapFill = memo(
  forwardRef<SVGSVGElement, NodeMapFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="node-map-fill" {...props}>
      <path fill="currentColor" d="M7.25 2.25a3 3 0 0 1 2.28 4.94l1.41 2a3 3 0 0 1 3.61 1.23l1.7-.53v-.14a3 3 0 1 1 .45 1.58l-1.7.53V12q0 .7-.3 1.3l1.8 1.5a3 3 0 1 1-.96 1.15l-1.8-1.5a3 3 0 0 1-3.53-.04L6.98 17a3 3 0 0 1-2.73 4.24 3 3 0 1 1 1.79-5.4l3.23-2.61a3 3 0 0 1 .44-3.18l-1.4-2a3 3 0 0 1-4.06-2.81 3 3 0 0 1 3-3" />
    </IconBase>
  ))
);

NodeMapFill.displayName = 'NodeMapFill';

// Triple export pattern (lucide-react style)
export { NodeMapFill, NodeMapFill as NodeMapFillIcon, NodeMapFill as SiNodeMapFill };
export default NodeMapFill;
export type { NodeMapFillProps };
