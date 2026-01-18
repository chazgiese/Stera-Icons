import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DeleteRegular } from './DeleteRegular';
import { DeleteRegularDuotone } from './DeleteRegularDuotone';
import { DeleteBold } from './DeleteBold';
import { DeleteBoldDuotone } from './DeleteBoldDuotone';
import { DeleteFill } from './DeleteFill';
import { DeleteFillDuotone } from './DeleteFillDuotone';

export interface DeleteProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Delete with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { DeleteRegular } from 'stera-icons/DeleteRegular';
 */
const Delete = memo(forwardRef<SVGSVGElement, DeleteProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <DeleteBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <DeleteBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <DeleteFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <DeleteFill ref={ref} {...rest} />;
  if (duotone) return <DeleteRegularDuotone ref={ref} {...rest} />;
  return <DeleteRegular ref={ref} {...rest} />;
}));

Delete.displayName = 'Delete';

export { Delete };
