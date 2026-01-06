import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CircleDivideCrossIcon as RegularCircleDivideCrossIcon } from './circle-divide-cross';
import { CircleDivideCrossIconDuotone as CircleDivideCrossIconDuotone } from './circle-divide-cross-duotone';
import { CircleDivideCrossIconBold as CircleDivideCrossIconBold } from './circle-divide-cross-bold';
import { CircleDivideCrossIconBoldDuotone as CircleDivideCrossIconBoldDuotone } from './circle-divide-cross-bold-duotone';
import { CircleDivideCrossIconFill as CircleDivideCrossIconFill } from './circle-divide-cross-fill';
import { CircleDivideCrossIconFillDuotone as CircleDivideCrossIconFillDuotone } from './circle-divide-cross-fill-duotone';

export interface CircleDivideCrossIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CircleDivideCrossIcon = memo(forwardRef<SVGSVGElement, CircleDivideCrossIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CircleDivideCrossIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CircleDivideCrossIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CircleDivideCrossIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CircleDivideCrossIconFill ref={ref} {...props} />;
  if (duotone) return <CircleDivideCrossIconDuotone ref={ref} {...props} />;
  return <RegularCircleDivideCrossIcon ref={ref} {...props} />;
}));

CircleDivideCrossIcon.displayName = 'CircleDivideCrossIcon';

export { CircleDivideCrossIcon };
