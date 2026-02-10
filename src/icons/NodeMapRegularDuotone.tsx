import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type NodeMapRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const NodeMapRegularDuotone = memo(
  forwardRef<SVGSVGElement, NodeMapRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="node-map-duotone" {...props}>
      <path d="M4.25 15.25a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M18.25 14.25a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M19.25 6.75a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M7.25 2.25a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" opacity={0.4} />
        <path fill="currentColor" d="M9.27 13.24a3 3 0 0 0 .94 1.16l-3.23 2.61a3 3 0 0 0-.94-1.17zM16.51 14.8a3 3 0 0 0-.97 1.16l-1.8-1.52a3 3 0 0 0 .96-1.15zM16.25 9.9q.05.78.45 1.43l-1.7.52a3 3 0 0 0-.45-1.43zM10.94 9.2a3 3 0 0 0-1.23.86l-1.4-2a3 3 0 0 0 1.22-.87z" />
    </IconBase>
  ))
);

NodeMapRegularDuotone.displayName = 'NodeMapRegularDuotone';

// Triple export pattern (lucide-react style)
export { NodeMapRegularDuotone, NodeMapRegularDuotone as NodeMapRegularDuotoneIcon, NodeMapRegularDuotone as SiNodeMapRegularDuotone };
export default NodeMapRegularDuotone;
export type { NodeMapRegularDuotoneProps };
