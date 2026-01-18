import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { StarHalfRegular } from './StarHalfRegular';
import { StarHalfRegularDuotone } from './StarHalfRegularDuotone';
import { StarHalfBold } from './StarHalfBold';
import { StarHalfBoldDuotone } from './StarHalfBoldDuotone';
import { StarHalfFill } from './StarHalfFill';
import { StarHalfFillDuotone } from './StarHalfFillDuotone';

export interface StarHalfProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * StarHalf with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { StarHalfRegular } from 'stera-icons/StarHalfRegular';
 */
const StarHalf = memo(forwardRef<SVGSVGElement, StarHalfProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <StarHalfBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <StarHalfBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <StarHalfFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <StarHalfFill ref={ref} {...rest} />;
  if (duotone) return <StarHalfRegularDuotone ref={ref} {...rest} />;
  return <StarHalfRegular ref={ref} {...rest} />;
}));

StarHalf.displayName = 'StarHalf';

export { StarHalf };
