import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { EditSquareRegular } from './EditSquareRegular';
import { EditSquareRegularDuotone } from './EditSquareRegularDuotone';
import { EditSquareBold } from './EditSquareBold';
import { EditSquareBoldDuotone } from './EditSquareBoldDuotone';
import { EditSquareFill } from './EditSquareFill';
import { EditSquareFillDuotone } from './EditSquareFillDuotone';

export interface EditSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * EditSquare with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { EditSquareRegular } from 'stera-icons/EditSquareRegular';
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

export { EditSquare };
