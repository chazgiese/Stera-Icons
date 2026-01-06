import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AtSignIcon as RegularAtSignIcon } from './at-sign';
import { AtSignIconDuotone as AtSignIconDuotone } from './at-sign-duotone';
import { AtSignIconBold as AtSignIconBold } from './at-sign-bold';
import { AtSignIconBoldDuotone as AtSignIconBoldDuotone } from './at-sign-bold-duotone';
import { AtSignIconFill as AtSignIconFill } from './at-sign-fill';
import { AtSignIconFillDuotone as AtSignIconFillDuotone } from './at-sign-fill-duotone';

export interface AtSignIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const AtSignIcon = memo(forwardRef<SVGSVGElement, AtSignIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <AtSignIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <AtSignIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <AtSignIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <AtSignIconFill ref={ref} {...props} />;
  if (duotone) return <AtSignIconDuotone ref={ref} {...props} />;
  return <RegularAtSignIcon ref={ref} {...props} />;
}));

AtSignIcon.displayName = 'AtSignIcon';

export { AtSignIcon };
