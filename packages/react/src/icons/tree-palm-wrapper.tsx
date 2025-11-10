import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { TreePalmIcon as RegularTreePalmIcon } from './tree-palm';
import { TreePalmIconBold } from './tree-palm-bold';
import { TreePalmIconFilled } from './tree-palm-filled';
import { TreePalmIconFilltone } from './tree-palm-filltone';
import { TreePalmIconLinetone } from './tree-palm-linetone';

export interface TreePalmIconProps extends IconProps {
  variant?: IconVariant;
}

const TreePalmIcon = memo(forwardRef<SVGSVGElement, TreePalmIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <TreePalmIconFilled ref={ref} {...props} />;
    case 'bold':
      return <TreePalmIconBold ref={ref} {...props} />;
    case 'filltone':
      return <TreePalmIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <TreePalmIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularTreePalmIcon ref={ref} {...props} />;
  }
}));

TreePalmIcon.displayName = 'TreePalmIcon';

export { TreePalmIcon };
