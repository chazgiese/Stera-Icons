import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { NodeMapIcon as RegularNodeMapIcon } from './node-map';
import { NodeMapIconDuotone as NodeMapIconDuotone } from './node-map-duotone';
import { NodeMapIconBold as NodeMapIconBold } from './node-map-bold';
import { NodeMapIconBoldDuotone as NodeMapIconBoldDuotone } from './node-map-bold-duotone';
import { NodeMapIconFill as NodeMapIconFill } from './node-map-fill';
import { NodeMapIconFillDuotone as NodeMapIconFillDuotone } from './node-map-fill-duotone';

export interface NodeMapIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const NodeMapIcon = memo(forwardRef<SVGSVGElement, NodeMapIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <NodeMapIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <NodeMapIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <NodeMapIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <NodeMapIconFill ref={ref} {...props} />;
  if (duotone) return <NodeMapIconDuotone ref={ref} {...props} />;
  return <RegularNodeMapIcon ref={ref} {...props} />;
}));

NodeMapIcon.displayName = 'NodeMapIcon';

export { NodeMapIcon };
