import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DiamondIcon as RegularDiamondIcon } from './diamond';
import { DiamondIconDuotone as DiamondIconDuotone } from './diamond-duotone';
import { DiamondIconBold as DiamondIconBold } from './diamond-bold';
import { DiamondIconBoldDuotone as DiamondIconBoldDuotone } from './diamond-bold-duotone';
import { DiamondIconFill as DiamondIconFill } from './diamond-fill';
import { DiamondIconFillDuotone as DiamondIconFillDuotone } from './diamond-fill-duotone';

export interface DiamondIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const DiamondIcon = memo(forwardRef<SVGSVGElement, DiamondIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <DiamondIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <DiamondIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <DiamondIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <DiamondIconFill ref={ref} {...props} />;
  if (duotone) return <DiamondIconDuotone ref={ref} {...props} />;
  return <RegularDiamondIcon ref={ref} {...props} />;
}));

DiamondIcon.displayName = 'DiamondIcon';

export { DiamondIcon };
