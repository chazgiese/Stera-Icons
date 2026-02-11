import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type NodeMapRegularProps = Omit<IconBaseProps, 'children'>;

const NodeMapRegular = memo(
  forwardRef<SVGSVGElement, NodeMapRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="node-map" {...props}>
      <path fillRule="evenodd" d="M7.25 2.25a3 3 0 0 1 2.28 4.94l1.41 2a3 3 0 0 1 3.61 1.23l1.7-.53v-.14a3 3 0 1 1 .45 1.58l-1.7.53V12q0 .7-.3 1.3l1.8 1.5a3 3 0 1 1-.96 1.15l-1.8-1.5a3 3 0 0 1-3.53-.04L6.98 17a3 3 0 0 1-2.73 4.24 3 3 0 1 1 1.79-5.4l3.23-2.61a3 3 0 0 1 .44-3.18l-1.4-2a3 3 0 0 1-4.06-2.81 3 3 0 0 1 3-3m-3 14.5a1.5 1.5 0 1 0 1.24.66l-.07-.1a1.5 1.5 0 0 0-1.17-.56m14-1a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 1 0 1.5-1.5M12 10.5a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.43-1.95A1.5 1.5 0 0 0 12 10.5m7.25-2.25a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-12-4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

NodeMapRegular.displayName = 'NodeMapRegular';

// Triple export pattern (lucide-react style)
export { NodeMapRegular, NodeMapRegular as NodeMapRegularIcon, NodeMapRegular as SiNodeMapRegular };
export default NodeMapRegular;
export type { NodeMapRegularProps };
