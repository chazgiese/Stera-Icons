import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HomeHeartIcon as RegularHomeHeartIcon } from './home-heart';
import { HomeHeartIconDuotone as HomeHeartIconDuotone } from './home-heart-duotone';
import { HomeHeartIconBold as HomeHeartIconBold } from './home-heart-bold';
import { HomeHeartIconBoldDuotone as HomeHeartIconBoldDuotone } from './home-heart-bold-duotone';
import { HomeHeartIconFill as HomeHeartIconFill } from './home-heart-fill';
import { HomeHeartIconFillDuotone as HomeHeartIconFillDuotone } from './home-heart-fill-duotone';

export interface HomeHeartIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const HomeHeartIcon = memo(forwardRef<SVGSVGElement, HomeHeartIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <HomeHeartIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <HomeHeartIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <HomeHeartIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <HomeHeartIconFill ref={ref} {...props} />;
  if (duotone) return <HomeHeartIconDuotone ref={ref} {...props} />;
  return <RegularHomeHeartIcon ref={ref} {...props} />;
}));

HomeHeartIcon.displayName = 'HomeHeartIcon';

export { HomeHeartIcon };
