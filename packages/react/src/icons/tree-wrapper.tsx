import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TreeIcon as RegularTreeIcon } from './tree';
import { TreeIconDuotone as TreeIconDuotone } from './tree-duotone';
import { TreeIconBold as TreeIconBold } from './tree-bold';
import { TreeIconBoldDuotone as TreeIconBoldDuotone } from './tree-bold-duotone';
import { TreeIconFill as TreeIconFill } from './tree-fill';
import { TreeIconFillDuotone as TreeIconFillDuotone } from './tree-fill-duotone';

export interface TreeIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const TreeIcon = memo(forwardRef<SVGSVGElement, TreeIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <TreeIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <TreeIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <TreeIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <TreeIconFill ref={ref} {...props} />;
  if (duotone) return <TreeIconDuotone ref={ref} {...props} />;
  return <RegularTreeIcon ref={ref} {...props} />;
}));

TreeIcon.displayName = 'TreeIcon';

export { TreeIcon };
