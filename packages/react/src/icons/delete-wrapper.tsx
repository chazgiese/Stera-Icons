import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { DeleteIcon as DeleteIconRegular } from './delete';
import { DeleteIconBold } from './delete-bold';
import { DeleteIconFilled } from './delete-filled';
import { DeleteIconFilltone } from './delete-filltone';
import { DeleteIconLinetone } from './delete-linetone';

export interface DeleteIconProps extends IconProps {
  variant?: IconVariant;
}

const DeleteIcon = memo(forwardRef<SVGSVGElement, DeleteIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <DeleteIconFilled ref={ref} {...props} />;
    case 'bold':
      return <DeleteIconBold ref={ref} {...props} />;
    case 'filltone':
      return <DeleteIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <DeleteIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <DeleteIconRegular ref={ref} {...props} />;
  }
}));

DeleteIcon.displayName = 'DeleteIcon';

export { DeleteIcon };
