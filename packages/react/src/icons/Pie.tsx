import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PieRegular } from './PieRegular';
import { PieRegularDuotone } from './PieRegularDuotone';
import { PieBold } from './PieBold';
import { PieBoldDuotone } from './PieBoldDuotone';
import { PieFill } from './PieFill';
import { PieFillDuotone } from './PieFillDuotone';

export interface PieProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Pie with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { PieRegular } from 'stera-icons/PieRegular';
 */
const Pie = memo(forwardRef<SVGSVGElement, PieProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PieBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PieBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PieFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PieFill ref={ref} {...rest} />;
  if (duotone) return <PieRegularDuotone ref={ref} {...rest} />;
  return <PieRegular ref={ref} {...rest} />;
}));

Pie.displayName = 'Pie';

export { Pie };
