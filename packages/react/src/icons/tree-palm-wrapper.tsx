import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TreePalmIcon as RegularTreePalmIcon } from './tree-palm';
import { TreePalmIconDuotone as TreePalmIconDuotone } from './tree-palm-duotone';
import { TreePalmIconBold as TreePalmIconBold } from './tree-palm-bold';
import { TreePalmIconBoldDuotone as TreePalmIconBoldDuotone } from './tree-palm-bold-duotone';
import { TreePalmIconFill as TreePalmIconFill } from './tree-palm-fill';
import { TreePalmIconFillDuotone as TreePalmIconFillDuotone } from './tree-palm-fill-duotone';

export interface TreePalmIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const TreePalmIcon = memo(forwardRef<SVGSVGElement, TreePalmIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <TreePalmIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <TreePalmIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <TreePalmIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <TreePalmIconFill ref={ref} {...props} />;
  if (duotone) return <TreePalmIconDuotone ref={ref} {...props} />;
  return <RegularTreePalmIcon ref={ref} {...props} />;
}));

TreePalmIcon.displayName = 'TreePalmIcon';

export { TreePalmIcon };
