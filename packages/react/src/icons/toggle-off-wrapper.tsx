import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ToggleOffIcon as RegularToggleOffIcon } from './toggle-off';
import { ToggleOffIconDuotone as ToggleOffIconDuotone } from './toggle-off-duotone';
import { ToggleOffIconBold as ToggleOffIconBold } from './toggle-off-bold';
import { ToggleOffIconBoldDuotone as ToggleOffIconBoldDuotone } from './toggle-off-bold-duotone';
import { ToggleOffIconFill as ToggleOffIconFill } from './toggle-off-fill';
import { ToggleOffIconFillDuotone as ToggleOffIconFillDuotone } from './toggle-off-fill-duotone';

export interface ToggleOffIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ToggleOffIcon = memo(forwardRef<SVGSVGElement, ToggleOffIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ToggleOffIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ToggleOffIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ToggleOffIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ToggleOffIconFill ref={ref} {...props} />;
  if (duotone) return <ToggleOffIconDuotone ref={ref} {...props} />;
  return <RegularToggleOffIcon ref={ref} {...props} />;
}));

ToggleOffIcon.displayName = 'ToggleOffIcon';

export { ToggleOffIcon };
