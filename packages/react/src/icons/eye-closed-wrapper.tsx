import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { EyeClosedIcon as RegularEyeClosedIcon } from './eye-closed';
import { EyeClosedIconDuotone as EyeClosedIconDuotone } from './eye-closed-duotone';
import { EyeClosedIconBold as EyeClosedIconBold } from './eye-closed-bold';
import { EyeClosedIconBoldDuotone as EyeClosedIconBoldDuotone } from './eye-closed-bold-duotone';
import { EyeClosedIconFill as EyeClosedIconFill } from './eye-closed-fill';
import { EyeClosedIconFillDuotone as EyeClosedIconFillDuotone } from './eye-closed-fill-duotone';

export interface EyeClosedIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const EyeClosedIcon = memo(forwardRef<SVGSVGElement, EyeClosedIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <EyeClosedIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <EyeClosedIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <EyeClosedIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <EyeClosedIconFill ref={ref} {...props} />;
  if (duotone) return <EyeClosedIconDuotone ref={ref} {...props} />;
  return <RegularEyeClosedIcon ref={ref} {...props} />;
}));

EyeClosedIcon.displayName = 'EyeClosedIcon';

export { EyeClosedIcon };
