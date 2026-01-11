import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CubeDashIcon as RegularCubeDashIcon } from './cube-dash';
import { CubeDashIconDuotone as CubeDashIconDuotone } from './cube-dash-duotone';
import { CubeDashIconBold as CubeDashIconBold } from './cube-dash-bold';
import { CubeDashIconBoldDuotone as CubeDashIconBoldDuotone } from './cube-dash-bold-duotone';
import { CubeDashIconFill as CubeDashIconFill } from './cube-dash-fill';
import { CubeDashIconFillDuotone as CubeDashIconFillDuotone } from './cube-dash-fill-duotone';

export interface CubeDashIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CubeDashIcon = memo(forwardRef<SVGSVGElement, CubeDashIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CubeDashIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CubeDashIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CubeDashIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CubeDashIconFill ref={ref} {...props} />;
  if (duotone) return <CubeDashIconDuotone ref={ref} {...props} />;
  return <RegularCubeDashIcon ref={ref} {...props} />;
}));

CubeDashIcon.displayName = 'CubeDashIcon';

export { CubeDashIcon };
