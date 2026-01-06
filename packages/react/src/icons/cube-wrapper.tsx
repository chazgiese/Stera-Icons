import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CubeIcon as RegularCubeIcon } from './cube';
import { CubeIconDuotone as CubeIconDuotone } from './cube-duotone';
import { CubeIconBold as CubeIconBold } from './cube-bold';
import { CubeIconBoldDuotone as CubeIconBoldDuotone } from './cube-bold-duotone';
import { CubeIconFill as CubeIconFill } from './cube-fill';
import { CubeIconFillDuotone as CubeIconFillDuotone } from './cube-fill-duotone';

export interface CubeIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CubeIcon = memo(forwardRef<SVGSVGElement, CubeIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CubeIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CubeIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CubeIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CubeIconFill ref={ref} {...props} />;
  if (duotone) return <CubeIconDuotone ref={ref} {...props} />;
  return <RegularCubeIcon ref={ref} {...props} />;
}));

CubeIcon.displayName = 'CubeIcon';

export { CubeIcon };
