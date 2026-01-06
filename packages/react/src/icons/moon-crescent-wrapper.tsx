import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MoonCrescentIcon as RegularMoonCrescentIcon } from './moon-crescent';
import { MoonCrescentIconDuotone as MoonCrescentIconDuotone } from './moon-crescent-duotone';
import { MoonCrescentIconBold as MoonCrescentIconBold } from './moon-crescent-bold';
import { MoonCrescentIconBoldDuotone as MoonCrescentIconBoldDuotone } from './moon-crescent-bold-duotone';
import { MoonCrescentIconFill as MoonCrescentIconFill } from './moon-crescent-fill';
import { MoonCrescentIconFillDuotone as MoonCrescentIconFillDuotone } from './moon-crescent-fill-duotone';

export interface MoonCrescentIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const MoonCrescentIcon = memo(forwardRef<SVGSVGElement, MoonCrescentIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <MoonCrescentIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <MoonCrescentIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <MoonCrescentIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <MoonCrescentIconFill ref={ref} {...props} />;
  if (duotone) return <MoonCrescentIconDuotone ref={ref} {...props} />;
  return <RegularMoonCrescentIcon ref={ref} {...props} />;
}));

MoonCrescentIcon.displayName = 'MoonCrescentIcon';

export { MoonCrescentIcon };
