import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CheckCircleRegular } from './CheckCircleRegular';
import { CheckCircleRegularDuotone } from './CheckCircleRegularDuotone';
import { CheckCircleBold } from './CheckCircleBold';
import { CheckCircleBoldDuotone } from './CheckCircleBoldDuotone';
import { CheckCircleFill } from './CheckCircleFill';
import { CheckCircleFillDuotone } from './CheckCircleFillDuotone';

export interface CheckCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CheckCircle with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { CheckCircleRegular } from 'stera-icons/CheckCircleRegular';
 */
const CheckCircle = memo(forwardRef<SVGSVGElement, CheckCircleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CheckCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CheckCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CheckCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CheckCircleFill ref={ref} {...rest} />;
  if (duotone) return <CheckCircleRegularDuotone ref={ref} {...rest} />;
  return <CheckCircleRegular ref={ref} {...rest} />;
}));

CheckCircle.displayName = 'CheckCircle';

export { CheckCircle };
