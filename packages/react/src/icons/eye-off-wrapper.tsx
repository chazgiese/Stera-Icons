import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { EyeOffIcon as RegularEyeOffIcon } from './eye-off';
import { EyeOffIconDuotone as EyeOffIconDuotone } from './eye-off-duotone';
import { EyeOffIconBold as EyeOffIconBold } from './eye-off-bold';
import { EyeOffIconBoldDuotone as EyeOffIconBoldDuotone } from './eye-off-bold-duotone';
import { EyeOffIconFill as EyeOffIconFill } from './eye-off-fill';
import { EyeOffIconFillDuotone as EyeOffIconFillDuotone } from './eye-off-fill-duotone';

export interface EyeOffIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const EyeOffIcon = memo(forwardRef<SVGSVGElement, EyeOffIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <EyeOffIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <EyeOffIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <EyeOffIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <EyeOffIconFill ref={ref} {...props} />;
  if (duotone) return <EyeOffIconDuotone ref={ref} {...props} />;
  return <RegularEyeOffIcon ref={ref} {...props} />;
}));

EyeOffIcon.displayName = 'EyeOffIcon';

export { EyeOffIcon };
