import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BellDotIcon as RegularBellDotIcon } from './bell-dot';
import { BellDotIconDuotone as BellDotIconDuotone } from './bell-dot-duotone';
import { BellDotIconBold as BellDotIconBold } from './bell-dot-bold';
import { BellDotIconBoldDuotone as BellDotIconBoldDuotone } from './bell-dot-bold-duotone';
import { BellDotIconFill as BellDotIconFill } from './bell-dot-fill';
import { BellDotIconFillDuotone as BellDotIconFillDuotone } from './bell-dot-fill-duotone';

export interface BellDotIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BellDotIcon = memo(forwardRef<SVGSVGElement, BellDotIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BellDotIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BellDotIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BellDotIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BellDotIconFill ref={ref} {...props} />;
  if (duotone) return <BellDotIconDuotone ref={ref} {...props} />;
  return <RegularBellDotIcon ref={ref} {...props} />;
}));

BellDotIcon.displayName = 'BellDotIcon';

export { BellDotIcon };
