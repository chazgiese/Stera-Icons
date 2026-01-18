import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ForkKnifeRegular } from './ForkKnifeRegular';
import { ForkKnifeRegularDuotone } from './ForkKnifeRegularDuotone';
import { ForkKnifeBold } from './ForkKnifeBold';
import { ForkKnifeBoldDuotone } from './ForkKnifeBoldDuotone';
import { ForkKnifeFill } from './ForkKnifeFill';
import { ForkKnifeFillDuotone } from './ForkKnifeFillDuotone';

export interface ForkKnifeProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ForkKnife with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ForkKnifeRegular } from 'stera-icons/ForkKnifeRegular';
 */
const ForkKnife = memo(forwardRef<SVGSVGElement, ForkKnifeProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ForkKnifeBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ForkKnifeBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ForkKnifeFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ForkKnifeFill ref={ref} {...rest} />;
  if (duotone) return <ForkKnifeRegularDuotone ref={ref} {...rest} />;
  return <ForkKnifeRegular ref={ref} {...rest} />;
}));

ForkKnife.displayName = 'ForkKnife';

export { ForkKnife };
