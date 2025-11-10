import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { FolderTreeIcon as RegularFolderTreeIcon } from './folder-tree';
import { FolderTreeIconBold } from './folder-tree-bold';
import { FolderTreeIconFilled } from './folder-tree-filled';
import { FolderTreeIconFilltone } from './folder-tree-filltone';
import { FolderTreeIconLinetone } from './folder-tree-linetone';

export interface FolderTreeIconProps extends IconProps {
  variant?: IconVariant;
}

const FolderTreeIcon = memo(forwardRef<SVGSVGElement, FolderTreeIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FolderTreeIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FolderTreeIconBold ref={ref} {...props} />;
    case 'filltone':
      return <FolderTreeIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <FolderTreeIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularFolderTreeIcon ref={ref} {...props} />;
  }
}));

FolderTreeIcon.displayName = 'FolderTreeIcon';

export { FolderTreeIcon };
