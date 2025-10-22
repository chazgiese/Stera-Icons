import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CityIcon as RegularCityIcon } from './city';
import { CityIconBold } from './city-bold';
import { CityIconFilled } from './city-filled';
import { CityIconFilltone } from './city-filltone';
import { CityIconLinetone } from './city-linetone';

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
    case 'filltone':
      return <CityIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CityIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularCityIcon ref={ref} {...props} />;
  }
}));

CityIcon.displayName = 'CityIcon';

export { CityIcon };
