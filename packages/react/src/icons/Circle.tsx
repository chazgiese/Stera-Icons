import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CircleRegular } from './CircleRegular';
import { CircleRegularDuotone } from './CircleRegularDuotone';
import { CircleBold } from './CircleBold';
import { CircleBoldDuotone } from './CircleBoldDuotone';
import { CircleFill } from './CircleFill';
import { CircleFillDuotone } from './CircleFillDuotone';

export interface CircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Circle with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { CircleRegular } from 'stera-icons/CircleRegular';
 */
const Circle = memo(forwardRef<SVGSVGElement, CircleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CircleFill ref={ref} {...rest} />;
  if (duotone) return <CircleRegularDuotone ref={ref} {...rest} />;
  return <CircleRegular ref={ref} {...rest} />;
}));

Circle.displayName = 'Circle';

export { Circle };
