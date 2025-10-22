import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { FolderPlusIcon as FolderPlusIconRegular } from './folder-plus';
import { FolderPlusIconBold } from './folder-plus-bold';
import { FolderPlusIconFilled } from './folder-plus-filled';
import { FolderPlusIconFilltone } from './folder-plus-filltone';
import { FolderPlusIconLinetone } from './folder-plus-linetone';

export interface FolderPlusIconProps extends IconProps {
  variant?: IconVariant;
}

const FolderPlusIcon = memo(forwardRef<SVGSVGElement, FolderPlusIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FolderPlusIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FolderPlusIconBold ref={ref} {...props} />;
    case 'filltone':
      return <FolderPlusIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <FolderPlusIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <FolderPlusIconRegular ref={ref} {...props} />;
  }
}));

FolderPlusIcon.displayName = 'FolderPlusIcon';

export { FolderPlusIcon };
