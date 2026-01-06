import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { StarHalfIcon as RegularStarHalfIcon } from './star-half';
import { StarHalfIconDuotone as StarHalfIconDuotone } from './star-half-duotone';
import { StarHalfIconBold as StarHalfIconBold } from './star-half-bold';
import { StarHalfIconBoldDuotone as StarHalfIconBoldDuotone } from './star-half-bold-duotone';
import { StarHalfIconFill as StarHalfIconFill } from './star-half-fill';
import { StarHalfIconFillDuotone as StarHalfIconFillDuotone } from './star-half-fill-duotone';

export interface StarHalfIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const StarHalfIcon = memo(forwardRef<SVGSVGElement, StarHalfIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <StarHalfIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <StarHalfIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <StarHalfIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <StarHalfIconFill ref={ref} {...props} />;
  if (duotone) return <StarHalfIconDuotone ref={ref} {...props} />;
  return <RegularStarHalfIcon ref={ref} {...props} />;
}));

StarHalfIcon.displayName = 'StarHalfIcon';

export { StarHalfIcon };
