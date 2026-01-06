import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HomeIcon as RegularHomeIcon } from './home';
import { HomeIconDuotone as HomeIconDuotone } from './home-duotone';
import { HomeIconBold as HomeIconBold } from './home-bold';
import { HomeIconBoldDuotone as HomeIconBoldDuotone } from './home-bold-duotone';
import { HomeIconFill as HomeIconFill } from './home-fill';
import { HomeIconFillDuotone as HomeIconFillDuotone } from './home-fill-duotone';

export interface HomeIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const HomeIcon = memo(forwardRef<SVGSVGElement, HomeIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <HomeIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <HomeIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <HomeIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <HomeIconFill ref={ref} {...props} />;
  if (duotone) return <HomeIconDuotone ref={ref} {...props} />;
  return <RegularHomeIcon ref={ref} {...props} />;
}));

HomeIcon.displayName = 'HomeIcon';

export { HomeIcon };
