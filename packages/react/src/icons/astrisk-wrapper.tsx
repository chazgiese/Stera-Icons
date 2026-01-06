import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AstriskIcon as RegularAstriskIcon } from './astrisk';
import { AstriskIconDuotone as AstriskIconDuotone } from './astrisk-duotone';
import { AstriskIconBold as AstriskIconBold } from './astrisk-bold';
import { AstriskIconBoldDuotone as AstriskIconBoldDuotone } from './astrisk-bold-duotone';
import { AstriskIconFill as AstriskIconFill } from './astrisk-fill';
import { AstriskIconFillDuotone as AstriskIconFillDuotone } from './astrisk-fill-duotone';

export interface AstriskIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const AstriskIcon = memo(forwardRef<SVGSVGElement, AstriskIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <AstriskIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <AstriskIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <AstriskIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <AstriskIconFill ref={ref} {...props} />;
  if (duotone) return <AstriskIconDuotone ref={ref} {...props} />;
  return <RegularAstriskIcon ref={ref} {...props} />;
}));

AstriskIcon.displayName = 'AstriskIcon';

export { AstriskIcon };
