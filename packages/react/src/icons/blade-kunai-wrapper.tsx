import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BladeKunaiIcon as RegularBladeKunaiIcon } from './blade-kunai';
import { BladeKunaiIconDuotone as BladeKunaiIconDuotone } from './blade-kunai-duotone';
import { BladeKunaiIconBold as BladeKunaiIconBold } from './blade-kunai-bold';
import { BladeKunaiIconBoldDuotone as BladeKunaiIconBoldDuotone } from './blade-kunai-bold-duotone';
import { BladeKunaiIconFill as BladeKunaiIconFill } from './blade-kunai-fill';
import { BladeKunaiIconFillDuotone as BladeKunaiIconFillDuotone } from './blade-kunai-fill-duotone';

export interface BladeKunaiIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BladeKunaiIcon = memo(forwardRef<SVGSVGElement, BladeKunaiIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BladeKunaiIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BladeKunaiIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BladeKunaiIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BladeKunaiIconFill ref={ref} {...props} />;
  if (duotone) return <BladeKunaiIconDuotone ref={ref} {...props} />;
  return <RegularBladeKunaiIcon ref={ref} {...props} />;
}));

BladeKunaiIcon.displayName = 'BladeKunaiIcon';

export { BladeKunaiIcon };
