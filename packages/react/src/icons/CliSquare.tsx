import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CliSquareRegular } from './CliSquareRegular';
import { CliSquareRegularDuotone } from './CliSquareRegularDuotone';
import { CliSquareBold } from './CliSquareBold';
import { CliSquareBoldDuotone } from './CliSquareBoldDuotone';
import { CliSquareFill } from './CliSquareFill';
import { CliSquareFillDuotone } from './CliSquareFillDuotone';

export interface CliSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CliSquare with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { CliSquareRegular } from 'stera-icons/CliSquareRegular';
 */
const CliSquare = memo(forwardRef<SVGSVGElement, CliSquareProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CliSquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CliSquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CliSquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CliSquareFill ref={ref} {...rest} />;
  if (duotone) return <CliSquareRegularDuotone ref={ref} {...rest} />;
  return <CliSquareRegular ref={ref} {...rest} />;
}));

CliSquare.displayName = 'CliSquare';

export { CliSquare };
