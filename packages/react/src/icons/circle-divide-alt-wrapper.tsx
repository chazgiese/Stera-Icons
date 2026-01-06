import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CircleDivideAltIcon as RegularCircleDivideAltIcon } from './circle-divide-alt';
import { CircleDivideAltIconDuotone as CircleDivideAltIconDuotone } from './circle-divide-alt-duotone';
import { CircleDivideAltIconBold as CircleDivideAltIconBold } from './circle-divide-alt-bold';
import { CircleDivideAltIconBoldDuotone as CircleDivideAltIconBoldDuotone } from './circle-divide-alt-bold-duotone';
import { CircleDivideAltIconFill as CircleDivideAltIconFill } from './circle-divide-alt-fill';
import { CircleDivideAltIconFillDuotone as CircleDivideAltIconFillDuotone } from './circle-divide-alt-fill-duotone';

export interface CircleDivideAltIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CircleDivideAltIcon = memo(forwardRef<SVGSVGElement, CircleDivideAltIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CircleDivideAltIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CircleDivideAltIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CircleDivideAltIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CircleDivideAltIconFill ref={ref} {...props} />;
  if (duotone) return <CircleDivideAltIconDuotone ref={ref} {...props} />;
  return <RegularCircleDivideAltIcon ref={ref} {...props} />;
}));

CircleDivideAltIcon.displayName = 'CircleDivideAltIcon';

export { CircleDivideAltIcon };
