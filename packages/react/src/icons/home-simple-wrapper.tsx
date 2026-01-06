import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HomeSimpleIcon as RegularHomeSimpleIcon } from './home-simple';
import { HomeSimpleIconDuotone as HomeSimpleIconDuotone } from './home-simple-duotone';
import { HomeSimpleIconBold as HomeSimpleIconBold } from './home-simple-bold';
import { HomeSimpleIconBoldDuotone as HomeSimpleIconBoldDuotone } from './home-simple-bold-duotone';
import { HomeSimpleIconFill as HomeSimpleIconFill } from './home-simple-fill';
import { HomeSimpleIconFillDuotone as HomeSimpleIconFillDuotone } from './home-simple-fill-duotone';

export interface HomeSimpleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const HomeSimpleIcon = memo(forwardRef<SVGSVGElement, HomeSimpleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <HomeSimpleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <HomeSimpleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <HomeSimpleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <HomeSimpleIconFill ref={ref} {...props} />;
  if (duotone) return <HomeSimpleIconDuotone ref={ref} {...props} />;
  return <RegularHomeSimpleIcon ref={ref} {...props} />;
}));

HomeSimpleIcon.displayName = 'HomeSimpleIcon';

export { HomeSimpleIcon };
