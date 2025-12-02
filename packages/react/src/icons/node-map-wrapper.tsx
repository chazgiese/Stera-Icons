import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { NodeMapIcon as RegularNodeMapIcon } from './node-map';
import { NodeMapIconBold } from './node-map-bold';
import { NodeMapIconFilled } from './node-map-filled';
import { NodeMapIconFilltone } from './node-map-filltone';
import { NodeMapIconLinetone } from './node-map-linetone';

export interface NodeMapIconProps extends IconProps {
  variant?: IconVariant;
}

const NodeMapIcon = memo(forwardRef<SVGSVGElement, NodeMapIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <NodeMapIconFilled ref={ref} {...props} />;
    case 'bold':
      return <NodeMapIconBold ref={ref} {...props} />;
    case 'filltone':
      return <NodeMapIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <NodeMapIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularNodeMapIcon ref={ref} {...props} />;
  }
}));

NodeMapIcon.displayName = 'NodeMapIcon';

export { NodeMapIcon };
