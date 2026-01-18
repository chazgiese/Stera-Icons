import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BottleRegular } from './BottleRegular';
import { BottleRegularDuotone } from './BottleRegularDuotone';
import { BottleBold } from './BottleBold';
import { BottleBoldDuotone } from './BottleBoldDuotone';
import { BottleFill } from './BottleFill';
import { BottleFillDuotone } from './BottleFillDuotone';

export interface BottleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Bottle with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { BottleRegular } from 'stera-icons/BottleRegular';
 */
const Bottle = memo(forwardRef<SVGSVGElement, BottleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BottleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BottleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BottleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BottleFill ref={ref} {...rest} />;
  if (duotone) return <BottleRegularDuotone ref={ref} {...rest} />;
  return <BottleRegular ref={ref} {...rest} />;
}));

Bottle.displayName = 'Bottle';

export { Bottle };
