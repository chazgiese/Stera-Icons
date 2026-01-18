import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { StarRegular } from './StarRegular';
import { StarRegularDuotone } from './StarRegularDuotone';
import { StarBold } from './StarBold';
import { StarBoldDuotone } from './StarBoldDuotone';
import { StarFill } from './StarFill';
import { StarFillDuotone } from './StarFillDuotone';

export interface StarProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Star with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { StarRegular } from 'stera-icons/StarRegular';
 */
const Star = memo(forwardRef<SVGSVGElement, StarProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <StarBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <StarBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <StarFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <StarFill ref={ref} {...rest} />;
  if (duotone) return <StarRegularDuotone ref={ref} {...rest} />;
  return <StarRegular ref={ref} {...rest} />;
}));

Star.displayName = 'Star';

export { Star };
