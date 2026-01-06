import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GavelIcon as RegularGavelIcon } from './gavel';
import { GavelIconDuotone as GavelIconDuotone } from './gavel-duotone';
import { GavelIconBold as GavelIconBold } from './gavel-bold';
import { GavelIconBoldDuotone as GavelIconBoldDuotone } from './gavel-bold-duotone';
import { GavelIconFill as GavelIconFill } from './gavel-fill';
import { GavelIconFillDuotone as GavelIconFillDuotone } from './gavel-fill-duotone';

export interface GavelIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const GavelIcon = memo(forwardRef<SVGSVGElement, GavelIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <GavelIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <GavelIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <GavelIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <GavelIconFill ref={ref} {...props} />;
  if (duotone) return <GavelIconDuotone ref={ref} {...props} />;
  return <RegularGavelIcon ref={ref} {...props} />;
}));

GavelIcon.displayName = 'GavelIcon';

export { GavelIcon };
