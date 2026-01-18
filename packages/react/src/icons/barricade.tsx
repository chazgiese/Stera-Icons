import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BarricadeRegular } from './BarricadeRegular';
import { BarricadeRegularDuotone } from './BarricadeRegularDuotone';
import { BarricadeBold } from './BarricadeBold';
import { BarricadeBoldDuotone } from './BarricadeBoldDuotone';
import { BarricadeFill } from './BarricadeFill';
import { BarricadeFillDuotone } from './BarricadeFillDuotone';

export interface BarricadeProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Barricade with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { BarricadeRegular } from 'stera-icons/BarricadeRegular';
 */
const Barricade = memo(forwardRef<SVGSVGElement, BarricadeProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BarricadeBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BarricadeBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BarricadeFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BarricadeFill ref={ref} {...rest} />;
  if (duotone) return <BarricadeRegularDuotone ref={ref} {...rest} />;
  return <BarricadeRegular ref={ref} {...rest} />;
}));

Barricade.displayName = 'Barricade';

export { Barricade };
