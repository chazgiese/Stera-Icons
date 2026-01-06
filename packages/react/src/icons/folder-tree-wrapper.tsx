import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FolderTreeIcon as RegularFolderTreeIcon } from './folder-tree';
import { FolderTreeIconDuotone as FolderTreeIconDuotone } from './folder-tree-duotone';
import { FolderTreeIconBold as FolderTreeIconBold } from './folder-tree-bold';
import { FolderTreeIconBoldDuotone as FolderTreeIconBoldDuotone } from './folder-tree-bold-duotone';
import { FolderTreeIconFill as FolderTreeIconFill } from './folder-tree-fill';
import { FolderTreeIconFillDuotone as FolderTreeIconFillDuotone } from './folder-tree-fill-duotone';

export interface FolderTreeIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const FolderTreeIcon = memo(forwardRef<SVGSVGElement, FolderTreeIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <FolderTreeIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <FolderTreeIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <FolderTreeIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <FolderTreeIconFill ref={ref} {...props} />;
  if (duotone) return <FolderTreeIconDuotone ref={ref} {...props} />;
  return <RegularFolderTreeIcon ref={ref} {...props} />;
}));

FolderTreeIcon.displayName = 'FolderTreeIcon';

export { FolderTreeIcon };
