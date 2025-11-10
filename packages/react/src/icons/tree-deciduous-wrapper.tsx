import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { TreeDeciduousIcon as RegularTreeDeciduousIcon } from './tree-deciduous';
import { TreeDeciduousIconBold } from './tree-deciduous-bold';
import { TreeDeciduousIconFilled } from './tree-deciduous-filled';
import { TreeDeciduousIconFilltone } from './tree-deciduous-filltone';
import { TreeDeciduousIconLinetone } from './tree-deciduous-linetone';

export interface TreeDeciduousIconProps extends IconProps {
  variant?: IconVariant;
}

const TreeDeciduousIcon = memo(forwardRef<SVGSVGElement, TreeDeciduousIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <TreeDeciduousIconFilled ref={ref} {...props} />;
    case 'bold':
      return <TreeDeciduousIconBold ref={ref} {...props} />;
    case 'filltone':
      return <TreeDeciduousIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <TreeDeciduousIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularTreeDeciduousIcon ref={ref} {...props} />;
  }
}));

TreeDeciduousIcon.displayName = 'TreeDeciduousIcon';

export { TreeDeciduousIcon };
