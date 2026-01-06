import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DeleteIcon as RegularDeleteIcon } from './delete';
import { DeleteIconDuotone as DeleteIconDuotone } from './delete-duotone';
import { DeleteIconBold as DeleteIconBold } from './delete-bold';
import { DeleteIconBoldDuotone as DeleteIconBoldDuotone } from './delete-bold-duotone';
import { DeleteIconFill as DeleteIconFill } from './delete-fill';
import { DeleteIconFillDuotone as DeleteIconFillDuotone } from './delete-fill-duotone';

export interface DeleteIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const DeleteIcon = memo(forwardRef<SVGSVGElement, DeleteIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <DeleteIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <DeleteIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <DeleteIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <DeleteIconFill ref={ref} {...props} />;
  if (duotone) return <DeleteIconDuotone ref={ref} {...props} />;
  return <RegularDeleteIcon ref={ref} {...props} />;
}));

DeleteIcon.displayName = 'DeleteIcon';

export { DeleteIcon };
