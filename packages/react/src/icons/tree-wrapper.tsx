import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { TreeIcon as RegularTreeIcon } from './tree';
import { TreeIconBold } from './tree-bold';
import { TreeIconFilled } from './tree-filled';
import { TreeIconFilltone } from './tree-filltone';
import { TreeIconLinetone } from './tree-linetone';

export interface TreeIconProps extends IconProps {
  variant?: IconVariant;
}

const TreeIcon = memo(forwardRef<SVGSVGElement, TreeIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <TreeIconFilled ref={ref} {...props} />;
    case 'bold':
      return <TreeIconBold ref={ref} {...props} />;
    case 'filltone':
      return <TreeIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <TreeIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularTreeIcon ref={ref} {...props} />;
  }
}));

TreeIcon.displayName = 'TreeIcon';

export { TreeIcon };
