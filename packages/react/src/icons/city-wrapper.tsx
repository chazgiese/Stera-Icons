import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CityIcon as CityIconRegular } from './city';
import { CityIconBold } from './city-bold';
import { CityIconFilled } from './city-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface CityIconProps extends IconProps {
  variant?: IconVariant;
}

const CityIcon = memo(forwardRef<SVGSVGElement, CityIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CityIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CityIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <CityIconRegular ref={ref} {...props} />;
  }
}));

CityIcon.displayName = 'CityIcon';

export { CityIcon };
