import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { FolderIcon as FolderIconRegular } from './folder';
import { FolderIconBold } from './folder-bold';
import { FolderIconFilled } from './folder-filled';
import { FolderIconFilltone } from './folder-filltone';
import { FolderIconLinetone } from './folder-linetone';

export interface FolderIconProps extends IconProps {
  variant?: IconVariant;
}

const FolderIcon = memo(forwardRef<SVGSVGElement, FolderIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FolderIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FolderIconBold ref={ref} {...props} />;
    case 'filltone':
      return <FolderIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <FolderIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <FolderIconRegular ref={ref} {...props} />;
  }
}));

FolderIcon.displayName = 'FolderIcon';

export { FolderIcon };
