import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { StarIcon as RegularStarIcon } from './star';
import { StarIconDuotone as StarIconDuotone } from './star-duotone';
import { StarIconBold as StarIconBold } from './star-bold';
import { StarIconBoldDuotone as StarIconBoldDuotone } from './star-bold-duotone';
import { StarIconFill as StarIconFill } from './star-fill';
import { StarIconFillDuotone as StarIconFillDuotone } from './star-fill-duotone';

export interface StarIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const StarIcon = memo(forwardRef<SVGSVGElement, StarIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <StarIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <StarIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <StarIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <StarIconFill ref={ref} {...props} />;
  if (duotone) return <StarIconDuotone ref={ref} {...props} />;
  return <RegularStarIcon ref={ref} {...props} />;
}));

StarIcon.displayName = 'StarIcon';

export { StarIcon };
