import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AwardStarIcon as RegularAwardStarIcon } from './award-star';
import { AwardStarIconDuotone as AwardStarIconDuotone } from './award-star-duotone';
import { AwardStarIconBold as AwardStarIconBold } from './award-star-bold';
import { AwardStarIconBoldDuotone as AwardStarIconBoldDuotone } from './award-star-bold-duotone';
import { AwardStarIconFill as AwardStarIconFill } from './award-star-fill';
import { AwardStarIconFillDuotone as AwardStarIconFillDuotone } from './award-star-fill-duotone';

export interface AwardStarIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const AwardStarIcon = memo(forwardRef<SVGSVGElement, AwardStarIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <AwardStarIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <AwardStarIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <AwardStarIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <AwardStarIconFill ref={ref} {...props} />;
  if (duotone) return <AwardStarIconDuotone ref={ref} {...props} />;
  return <RegularAwardStarIcon ref={ref} {...props} />;
}));

AwardStarIcon.displayName = 'AwardStarIcon';

export { AwardStarIcon };
