import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { EditSquareRegular } from './EditSquareRegular.js';
import { EditSquareRegularDuotone } from './EditSquareRegularDuotone.js';
import { EditSquareBold } from './EditSquareBold.js';
import { EditSquareBoldDuotone } from './EditSquareBoldDuotone.js';
import { EditSquareFill } from './EditSquareFill.js';
import { EditSquareFillDuotone } from './EditSquareFillDuotone.js';

export interface EditSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * EditSquare - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { EditSquareRegular } from 'stera-icons/icons/EditSquareRegular';
 */
const EditSquare = memo(forwardRef<SVGSVGElement, EditSquareProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <EditSquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <EditSquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <EditSquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <EditSquareFill ref={ref} {...rest} />;
  if (duotone) return <EditSquareRegularDuotone ref={ref} {...rest} />;
  return <EditSquareRegular ref={ref} {...rest} />;
}));

EditSquare.displayName = 'EditSquare';

// Triple export pattern (lucide-react style)
export { EditSquare, EditSquare as EditSquareIcon, EditSquare as SiEditSquare };
export default EditSquare;
