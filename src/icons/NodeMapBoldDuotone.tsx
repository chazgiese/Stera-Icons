import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type NodeMapBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const NodeMapBoldDuotone = memo(
  forwardRef<SVGSVGElement, NodeMapBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="node-map-bold-duotone" {...props}>
      <path d="M8.97 13.16a3.3 3.3 0 0 0 1.25 1.56l-2.94 2.37a3.3 3.3 0 0 0-1.25-1.56zM16.53 14.5a3.3 3.3 0 0 0-1.29 1.53l-1.52-1.28a3.3 3.3 0 0 0 1.29-1.53zM16 9.75a3.3 3.3 0 0 0 .6 1.87l-1.35.42V12a3.3 3.3 0 0 0-.6-1.87L16 9.7zM11.04 8.9a3.2 3.2 0 0 0-1.64 1.15l-1.19-1.7A3.2 3.2 0 0 0 9.85 7.2z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M4.25 15a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 2a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M18.25 14a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 2A1.24 1.24 0 0 0 17 17.25 1.25 1.25 0 1 0 18.25 16M12 8.75a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 2q-.41 0-.72.23a1.25 1.25 0 1 0 1.68 1.82 1.2 1.2 0 0 0 .23-1.17 1.25 1.25 0 0 0-1.19-.88M19.25 6.5a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 2a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M7.25 2a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5m0 2a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clipRule="evenodd" />
    </IconBase>
  ))
);

NodeMapBoldDuotone.displayName = 'NodeMapBoldDuotone';

// Triple export pattern (lucide-react style)
export { NodeMapBoldDuotone, NodeMapBoldDuotone as NodeMapBoldDuotoneIcon, NodeMapBoldDuotone as SiNodeMapBoldDuotone };
export default NodeMapBoldDuotone;
export type { NodeMapBoldDuotoneProps };
