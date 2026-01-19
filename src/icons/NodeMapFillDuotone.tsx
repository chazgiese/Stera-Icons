import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type NodeMapFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const NodeMapFillDuotone = memo(
  forwardRef<SVGSVGElement, NodeMapFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="node-map-fill-duotone" {...props}>
      <path d="M9.27 13.24a3 3 0 0 0 .94 1.17L6.98 17a3 3 0 0 0-.94-1.17zM16.5 14.8a3 3 0 0 0-.96 1.16l-1.8-1.52a3 3 0 0 0 .97-1.15zM16.25 9.9a3 3 0 0 0 .45 1.43l-1.7.53a3 3 0 0 0-.45-1.44zM10.94 9.2a3 3 0 0 0-1.23.86l-1.4-2a3 3 0 0 0 1.22-.87z" opacity={0.4} />
        <path fill="currentColor" d="M4.25 15.25a3 3 0 1 1 0 6 3 3 0 0 1 0-6M18.25 14.25a3 3 0 1 1 0 6 3 3 0 0 1 0-6M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6M19.25 6.75a3 3 0 1 1 0 6 3 3 0 0 1 0-6M7.25 2.25a3 3 0 1 1 0 6 3 3 0 0 1 0-6" />
    </IconBase>
  ))
);

NodeMapFillDuotone.displayName = 'NodeMapFillDuotone';

// Triple export pattern (lucide-react style)
export { NodeMapFillDuotone, NodeMapFillDuotone as NodeMapFillDuotoneIcon, NodeMapFillDuotone as SiNodeMapFillDuotone };
export type { NodeMapFillDuotoneProps };
