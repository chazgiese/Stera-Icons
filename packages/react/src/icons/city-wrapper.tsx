import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CityIcon as RegularCityIcon } from './city';
import { CityIconDuotone as CityIconDuotone } from './city-duotone';
import { CityIconBold as CityIconBold } from './city-bold';
import { CityIconBoldDuotone as CityIconBoldDuotone } from './city-bold-duotone';
import { CityIconFill as CityIconFill } from './city-fill';
import { CityIconFillDuotone as CityIconFillDuotone } from './city-fill-duotone';

export interface CityIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CityIcon = memo(forwardRef<SVGSVGElement, CityIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CityIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CityIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CityIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CityIconFill ref={ref} {...props} />;
  if (duotone) return <CityIconDuotone ref={ref} {...props} />;
  return <RegularCityIcon ref={ref} {...props} />;
}));

CityIcon.displayName = 'CityIcon';

export { CityIcon };
