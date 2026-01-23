import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { DeleteRegular } from './DeleteRegular.js';
import { DeleteRegularDuotone } from './DeleteRegularDuotone.js';
import { DeleteBold } from './DeleteBold.js';
import { DeleteBoldDuotone } from './DeleteBoldDuotone.js';
import { DeleteFill } from './DeleteFill.js';
import { DeleteFillDuotone } from './DeleteFillDuotone.js';

export interface DeleteProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Delete - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { DeleteRegular } from 'stera-icons/icons/DeleteRegular';
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

// Triple export pattern (lucide-react style)
export { Delete, Delete as DeleteIcon, Delete as SiDelete };
export default Delete;
