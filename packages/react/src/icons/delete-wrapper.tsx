import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DeleteIcon as DeleteIconRegular } from './delete';
import { DeleteIconBold } from './delete-bold';
import { DeleteIconFilled } from './delete-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <DeleteIconRegular ref={ref} {...props} />;
  }
}));

DeleteIcon.displayName = 'DeleteIcon';

export { DeleteIcon };
