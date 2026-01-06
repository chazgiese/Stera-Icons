import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BellIcon as RegularBellIcon } from './bell';
import { BellIconDuotone as BellIconDuotone } from './bell-duotone';
import { BellIconBold as BellIconBold } from './bell-bold';
import { BellIconBoldDuotone as BellIconBoldDuotone } from './bell-bold-duotone';
import { BellIconFill as BellIconFill } from './bell-fill';
import { BellIconFillDuotone as BellIconFillDuotone } from './bell-fill-duotone';

export interface BellIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BellIcon = memo(forwardRef<SVGSVGElement, BellIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BellIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BellIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BellIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BellIconFill ref={ref} {...props} />;
  if (duotone) return <BellIconDuotone ref={ref} {...props} />;
  return <RegularBellIcon ref={ref} {...props} />;
}));

BellIcon.displayName = 'BellIcon';

export { BellIcon };
