import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AstriskAltIcon as RegularAstriskAltIcon } from './astrisk-alt';
import { AstriskAltIconDuotone as AstriskAltIconDuotone } from './astrisk-alt-duotone';
import { AstriskAltIconBold as AstriskAltIconBold } from './astrisk-alt-bold';
import { AstriskAltIconBoldDuotone as AstriskAltIconBoldDuotone } from './astrisk-alt-bold-duotone';
import { AstriskAltIconFill as AstriskAltIconFill } from './astrisk-alt-fill';
import { AstriskAltIconFillDuotone as AstriskAltIconFillDuotone } from './astrisk-alt-fill-duotone';

export interface AstriskAltIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const AstriskAltIcon = memo(forwardRef<SVGSVGElement, AstriskAltIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <AstriskAltIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <AstriskAltIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <AstriskAltIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <AstriskAltIconFill ref={ref} {...props} />;
  if (duotone) return <AstriskAltIconDuotone ref={ref} {...props} />;
  return <RegularAstriskAltIcon ref={ref} {...props} />;
}));

AstriskAltIcon.displayName = 'AstriskAltIcon';

export { AstriskAltIcon };
