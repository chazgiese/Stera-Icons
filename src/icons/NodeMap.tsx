import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { NodeMapRegular } from './NodeMapRegular.js';
import { NodeMapRegularDuotone } from './NodeMapRegularDuotone.js';
import { NodeMapBold } from './NodeMapBold.js';
import { NodeMapBoldDuotone } from './NodeMapBoldDuotone.js';
import { NodeMapFill } from './NodeMapFill.js';
import { NodeMapFillDuotone } from './NodeMapFillDuotone.js';

export interface NodeMapProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * NodeMap - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { NodeMapRegular } from 'stera-icons/icons/NodeMapRegular';
 */
const NodeMap = memo(forwardRef<SVGSVGElement, NodeMapProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <NodeMapBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <NodeMapBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <NodeMapFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <NodeMapFill ref={ref} {...rest} />;
  if (duotone) return <NodeMapRegularDuotone ref={ref} {...rest} />;
  return <NodeMapRegular ref={ref} {...rest} />;
}));

NodeMap.displayName = 'NodeMap';

// Triple export pattern (lucide-react style)
export { NodeMap, NodeMap as NodeMapIcon, NodeMap as SiNodeMap };
export default NodeMap;
