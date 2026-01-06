import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BellOffIcon as RegularBellOffIcon } from './bell-off';
import { BellOffIconDuotone as BellOffIconDuotone } from './bell-off-duotone';
import { BellOffIconBold as BellOffIconBold } from './bell-off-bold';
import { BellOffIconBoldDuotone as BellOffIconBoldDuotone } from './bell-off-bold-duotone';
import { BellOffIconFill as BellOffIconFill } from './bell-off-fill';
import { BellOffIconFillDuotone as BellOffIconFillDuotone } from './bell-off-fill-duotone';

export interface BellOffIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BellOffIcon = memo(forwardRef<SVGSVGElement, BellOffIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BellOffIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BellOffIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BellOffIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BellOffIconFill ref={ref} {...props} />;
  if (duotone) return <BellOffIconDuotone ref={ref} {...props} />;
  return <RegularBellOffIcon ref={ref} {...props} />;
}));

BellOffIcon.displayName = 'BellOffIcon';

export { BellOffIcon };
