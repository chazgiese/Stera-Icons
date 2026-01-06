import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ToggleOnIcon as RegularToggleOnIcon } from './toggle-on';
import { ToggleOnIconDuotone as ToggleOnIconDuotone } from './toggle-on-duotone';
import { ToggleOnIconBold as ToggleOnIconBold } from './toggle-on-bold';
import { ToggleOnIconBoldDuotone as ToggleOnIconBoldDuotone } from './toggle-on-bold-duotone';
import { ToggleOnIconFill as ToggleOnIconFill } from './toggle-on-fill';
import { ToggleOnIconFillDuotone as ToggleOnIconFillDuotone } from './toggle-on-fill-duotone';

export interface ToggleOnIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ToggleOnIcon = memo(forwardRef<SVGSVGElement, ToggleOnIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ToggleOnIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ToggleOnIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ToggleOnIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ToggleOnIconFill ref={ref} {...props} />;
  if (duotone) return <ToggleOnIconDuotone ref={ref} {...props} />;
  return <RegularToggleOnIcon ref={ref} {...props} />;
}));

ToggleOnIcon.displayName = 'ToggleOnIcon';

export { ToggleOnIcon };
