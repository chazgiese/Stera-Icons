import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ApertureIcon as RegularApertureIcon } from './aperture';
import { ApertureIconDuotone as ApertureIconDuotone } from './aperture-duotone';
import { ApertureIconBold as ApertureIconBold } from './aperture-bold';
import { ApertureIconBoldDuotone as ApertureIconBoldDuotone } from './aperture-bold-duotone';
import { ApertureIconFill as ApertureIconFill } from './aperture-fill';
import { ApertureIconFillDuotone as ApertureIconFillDuotone } from './aperture-fill-duotone';

export interface ApertureIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ApertureIcon = memo(forwardRef<SVGSVGElement, ApertureIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ApertureIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ApertureIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ApertureIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ApertureIconFill ref={ref} {...props} />;
  if (duotone) return <ApertureIconDuotone ref={ref} {...props} />;
  return <RegularApertureIcon ref={ref} {...props} />;
}));

ApertureIcon.displayName = 'ApertureIcon';

export { ApertureIcon };
