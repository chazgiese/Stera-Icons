import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { Home3dIcon as RegularHome3dIcon } from './home-3d';
import { Home3dIconDuotone as Home3dIconDuotone } from './home-3d-duotone';
import { Home3dIconBold as Home3dIconBold } from './home-3d-bold';
import { Home3dIconBoldDuotone as Home3dIconBoldDuotone } from './home-3d-bold-duotone';
import { Home3dIconFill as Home3dIconFill } from './home-3d-fill';
import { Home3dIconFillDuotone as Home3dIconFillDuotone } from './home-3d-fill-duotone';

export interface Home3dIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const Home3dIcon = memo(forwardRef<SVGSVGElement, Home3dIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <Home3dIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <Home3dIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <Home3dIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <Home3dIconFill ref={ref} {...props} />;
  if (duotone) return <Home3dIconDuotone ref={ref} {...props} />;
  return <RegularHome3dIcon ref={ref} {...props} />;
}));

Home3dIcon.displayName = 'Home3dIcon';

export { Home3dIcon };
