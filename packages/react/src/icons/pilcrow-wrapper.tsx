import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PilcrowIcon as RegularPilcrowIcon } from './pilcrow';
import { PilcrowIconDuotone as PilcrowIconDuotone } from './pilcrow-duotone';
import { PilcrowIconBold as PilcrowIconBold } from './pilcrow-bold';
import { PilcrowIconBoldDuotone as PilcrowIconBoldDuotone } from './pilcrow-bold-duotone';
import { PilcrowIconFill as PilcrowIconFill } from './pilcrow-fill';
import { PilcrowIconFillDuotone as PilcrowIconFillDuotone } from './pilcrow-fill-duotone';

export interface PilcrowIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const PilcrowIcon = memo(forwardRef<SVGSVGElement, PilcrowIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <PilcrowIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <PilcrowIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <PilcrowIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <PilcrowIconFill ref={ref} {...props} />;
  if (duotone) return <PilcrowIconDuotone ref={ref} {...props} />;
  return <RegularPilcrowIcon ref={ref} {...props} />;
}));

PilcrowIcon.displayName = 'PilcrowIcon';

export { PilcrowIcon };
