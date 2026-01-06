import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MoonStarIcon as RegularMoonStarIcon } from './moon-star';
import { MoonStarIconDuotone as MoonStarIconDuotone } from './moon-star-duotone';
import { MoonStarIconBold as MoonStarIconBold } from './moon-star-bold';
import { MoonStarIconBoldDuotone as MoonStarIconBoldDuotone } from './moon-star-bold-duotone';
import { MoonStarIconFill as MoonStarIconFill } from './moon-star-fill';
import { MoonStarIconFillDuotone as MoonStarIconFillDuotone } from './moon-star-fill-duotone';

export interface MoonStarIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const MoonStarIcon = memo(forwardRef<SVGSVGElement, MoonStarIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <MoonStarIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <MoonStarIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <MoonStarIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <MoonStarIconFill ref={ref} {...props} />;
  if (duotone) return <MoonStarIconDuotone ref={ref} {...props} />;
  return <RegularMoonStarIcon ref={ref} {...props} />;
}));

MoonStarIcon.displayName = 'MoonStarIcon';

export { MoonStarIcon };
