import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { FolderOpenIcon as RegularFolderOpenIcon } from './folder-open';
import { FolderOpenIconBold } from './folder-open-bold';
import { FolderOpenIconFilled } from './folder-open-filled';
import { FolderOpenIconFilltone } from './folder-open-filltone';
import { FolderOpenIconLinetone } from './folder-open-linetone';

export interface FolderOpenIconProps extends IconProps {
  variant?: IconVariant;
}

const FolderOpenIcon = memo(forwardRef<SVGSVGElement, FolderOpenIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FolderOpenIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FolderOpenIconBold ref={ref} {...props} />;
    case 'filltone':
      return <FolderOpenIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <FolderOpenIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularFolderOpenIcon ref={ref} {...props} />;
  }
}));

FolderOpenIcon.displayName = 'FolderOpenIcon';

export { FolderOpenIcon };
