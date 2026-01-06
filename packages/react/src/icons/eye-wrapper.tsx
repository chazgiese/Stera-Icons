import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { EyeIcon as RegularEyeIcon } from './eye';
import { EyeIconDuotone as EyeIconDuotone } from './eye-duotone';
import { EyeIconBold as EyeIconBold } from './eye-bold';
import { EyeIconBoldDuotone as EyeIconBoldDuotone } from './eye-bold-duotone';
import { EyeIconFill as EyeIconFill } from './eye-fill';
import { EyeIconFillDuotone as EyeIconFillDuotone } from './eye-fill-duotone';

export interface EyeIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const EyeIcon = memo(forwardRef<SVGSVGElement, EyeIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <EyeIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <EyeIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <EyeIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <EyeIconFill ref={ref} {...props} />;
  if (duotone) return <EyeIconDuotone ref={ref} {...props} />;
  return <RegularEyeIcon ref={ref} {...props} />;
}));

EyeIcon.displayName = 'EyeIcon';

export { EyeIcon };
