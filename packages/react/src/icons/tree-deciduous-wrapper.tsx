import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TreeDeciduousIcon as RegularTreeDeciduousIcon } from './tree-deciduous';
import { TreeDeciduousIconDuotone as TreeDeciduousIconDuotone } from './tree-deciduous-duotone';
import { TreeDeciduousIconBold as TreeDeciduousIconBold } from './tree-deciduous-bold';
import { TreeDeciduousIconBoldDuotone as TreeDeciduousIconBoldDuotone } from './tree-deciduous-bold-duotone';
import { TreeDeciduousIconFill as TreeDeciduousIconFill } from './tree-deciduous-fill';
import { TreeDeciduousIconFillDuotone as TreeDeciduousIconFillDuotone } from './tree-deciduous-fill-duotone';

export interface TreeDeciduousIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const TreeDeciduousIcon = memo(forwardRef<SVGSVGElement, TreeDeciduousIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <TreeDeciduousIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <TreeDeciduousIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <TreeDeciduousIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <TreeDeciduousIconFill ref={ref} {...props} />;
  if (duotone) return <TreeDeciduousIconDuotone ref={ref} {...props} />;
  return <RegularTreeDeciduousIcon ref={ref} {...props} />;
}));

TreeDeciduousIcon.displayName = 'TreeDeciduousIcon';

export { TreeDeciduousIcon };
