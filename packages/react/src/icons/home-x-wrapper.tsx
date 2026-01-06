import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HomeXIcon as RegularHomeXIcon } from './home-x';
import { HomeXIconDuotone as HomeXIconDuotone } from './home-x-duotone';
import { HomeXIconBold as HomeXIconBold } from './home-x-bold';
import { HomeXIconBoldDuotone as HomeXIconBoldDuotone } from './home-x-bold-duotone';
import { HomeXIconFill as HomeXIconFill } from './home-x-fill';
import { HomeXIconFillDuotone as HomeXIconFillDuotone } from './home-x-fill-duotone';

export interface HomeXIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const HomeXIcon = memo(forwardRef<SVGSVGElement, HomeXIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <HomeXIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <HomeXIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <HomeXIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <HomeXIconFill ref={ref} {...props} />;
  if (duotone) return <HomeXIconDuotone ref={ref} {...props} />;
  return <RegularHomeXIcon ref={ref} {...props} />;
}));

HomeXIcon.displayName = 'HomeXIcon';

export { HomeXIcon };
