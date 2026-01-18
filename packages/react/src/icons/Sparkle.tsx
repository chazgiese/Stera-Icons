import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SparkleRegular } from './SparkleRegular';
import { SparkleRegularDuotone } from './SparkleRegularDuotone';
import { SparkleBold } from './SparkleBold';
import { SparkleBoldDuotone } from './SparkleBoldDuotone';
import { SparkleFill } from './SparkleFill';
import { SparkleFillDuotone } from './SparkleFillDuotone';

export interface SparkleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Sparkle with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { SparkleRegular } from 'stera-icons/SparkleRegular';
 */
const Sparkle = memo(forwardRef<SVGSVGElement, SparkleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SparkleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SparkleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SparkleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SparkleFill ref={ref} {...rest} />;
  if (duotone) return <SparkleRegularDuotone ref={ref} {...rest} />;
  return <SparkleRegular ref={ref} {...rest} />;
}));

Sparkle.displayName = 'Sparkle';

export { Sparkle };
