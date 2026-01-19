import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AlertSquareRegular } from './AlertSquareRegular';
import { AlertSquareRegularDuotone } from './AlertSquareRegularDuotone';
import { AlertSquareBold } from './AlertSquareBold';
import { AlertSquareBoldDuotone } from './AlertSquareBoldDuotone';
import { AlertSquareFill } from './AlertSquareFill';
import { AlertSquareFillDuotone } from './AlertSquareFillDuotone';

export interface AlertSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * AlertSquare - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AlertSquareRegular } from 'stera-icons/icons/AlertSquareRegular';
 */
const AlertSquare = memo(forwardRef<SVGSVGElement, AlertSquareProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <AlertSquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AlertSquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AlertSquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AlertSquareFill ref={ref} {...rest} />;
  if (duotone) return <AlertSquareRegularDuotone ref={ref} {...rest} />;
  return <AlertSquareRegular ref={ref} {...rest} />;
}));

AlertSquare.displayName = 'AlertSquare';

// Triple export pattern (lucide-react style)
export { AlertSquare, AlertSquare as AlertSquareIcon, AlertSquare as SiAlertSquare };
