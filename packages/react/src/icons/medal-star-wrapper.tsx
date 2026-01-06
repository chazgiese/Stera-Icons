import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MedalStarIcon as RegularMedalStarIcon } from './medal-star';
import { MedalStarIconDuotone as MedalStarIconDuotone } from './medal-star-duotone';
import { MedalStarIconBold as MedalStarIconBold } from './medal-star-bold';
import { MedalStarIconBoldDuotone as MedalStarIconBoldDuotone } from './medal-star-bold-duotone';
import { MedalStarIconFill as MedalStarIconFill } from './medal-star-fill';
import { MedalStarIconFillDuotone as MedalStarIconFillDuotone } from './medal-star-fill-duotone';

export interface MedalStarIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const MedalStarIcon = memo(forwardRef<SVGSVGElement, MedalStarIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <MedalStarIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <MedalStarIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <MedalStarIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <MedalStarIconFill ref={ref} {...props} />;
  if (duotone) return <MedalStarIconDuotone ref={ref} {...props} />;
  return <RegularMedalStarIcon ref={ref} {...props} />;
}));

MedalStarIcon.displayName = 'MedalStarIcon';

export { MedalStarIcon };
