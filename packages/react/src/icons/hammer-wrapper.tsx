import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HammerIcon as RegularHammerIcon } from './hammer';
import { HammerIconDuotone as HammerIconDuotone } from './hammer-duotone';
import { HammerIconBold as HammerIconBold } from './hammer-bold';
import { HammerIconBoldDuotone as HammerIconBoldDuotone } from './hammer-bold-duotone';
import { HammerIconFill as HammerIconFill } from './hammer-fill';
import { HammerIconFillDuotone as HammerIconFillDuotone } from './hammer-fill-duotone';

export interface HammerIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const HammerIcon = memo(forwardRef<SVGSVGElement, HammerIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <HammerIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <HammerIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <HammerIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <HammerIconFill ref={ref} {...props} />;
  if (duotone) return <HammerIconDuotone ref={ref} {...props} />;
  return <RegularHammerIcon ref={ref} {...props} />;
}));

HammerIcon.displayName = 'HammerIcon';

export { HammerIcon };
