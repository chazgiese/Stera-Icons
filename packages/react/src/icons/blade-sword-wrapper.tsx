import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BladeSwordIcon as RegularBladeSwordIcon } from './blade-sword';
import { BladeSwordIconDuotone as BladeSwordIconDuotone } from './blade-sword-duotone';
import { BladeSwordIconBold as BladeSwordIconBold } from './blade-sword-bold';
import { BladeSwordIconBoldDuotone as BladeSwordIconBoldDuotone } from './blade-sword-bold-duotone';
import { BladeSwordIconFill as BladeSwordIconFill } from './blade-sword-fill';
import { BladeSwordIconFillDuotone as BladeSwordIconFillDuotone } from './blade-sword-fill-duotone';

export interface BladeSwordIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BladeSwordIcon = memo(forwardRef<SVGSVGElement, BladeSwordIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BladeSwordIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BladeSwordIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BladeSwordIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BladeSwordIconFill ref={ref} {...props} />;
  if (duotone) return <BladeSwordIconDuotone ref={ref} {...props} />;
  return <RegularBladeSwordIcon ref={ref} {...props} />;
}));

BladeSwordIcon.displayName = 'BladeSwordIcon';

export { BladeSwordIcon };
