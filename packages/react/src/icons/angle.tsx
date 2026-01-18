import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AngleRegular } from './AngleRegular';
import { AngleRegularDuotone } from './AngleRegularDuotone';
import { AngleBold } from './AngleBold';
import { AngleBoldDuotone } from './AngleBoldDuotone';
import { AngleFill } from './AngleFill';
import { AngleFillDuotone } from './AngleFillDuotone';

export interface AngleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Angle with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { AngleRegular } from 'stera-icons/AngleRegular';
 */
const Angle = memo(forwardRef<SVGSVGElement, AngleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <AngleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AngleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AngleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AngleFill ref={ref} {...rest} />;
  if (duotone) return <AngleRegularDuotone ref={ref} {...rest} />;
  return <AngleRegular ref={ref} {...rest} />;
}));

Angle.displayName = 'Angle';

export { Angle };
