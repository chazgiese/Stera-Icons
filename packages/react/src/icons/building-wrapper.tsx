import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BuildingIcon as RegularBuildingIcon } from './building';
import { BuildingIconDuotone as BuildingIconDuotone } from './building-duotone';
import { BuildingIconBold as BuildingIconBold } from './building-bold';
import { BuildingIconBoldDuotone as BuildingIconBoldDuotone } from './building-bold-duotone';
import { BuildingIconFill as BuildingIconFill } from './building-fill';
import { BuildingIconFillDuotone as BuildingIconFillDuotone } from './building-fill-duotone';

export interface BuildingIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BuildingIcon = memo(forwardRef<SVGSVGElement, BuildingIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BuildingIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BuildingIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BuildingIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BuildingIconFill ref={ref} {...props} />;
  if (duotone) return <BuildingIconDuotone ref={ref} {...props} />;
  return <RegularBuildingIcon ref={ref} {...props} />;
}));

BuildingIcon.displayName = 'BuildingIcon';

export { BuildingIcon };
