import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CirclesThreeIcon as RegularCirclesThreeIcon } from './circles-three';
import { CirclesThreeIconDuotone as CirclesThreeIconDuotone } from './circles-three-duotone';
import { CirclesThreeIconBold as CirclesThreeIconBold } from './circles-three-bold';
import { CirclesThreeIconBoldDuotone as CirclesThreeIconBoldDuotone } from './circles-three-bold-duotone';
import { CirclesThreeIconFill as CirclesThreeIconFill } from './circles-three-fill';
import { CirclesThreeIconFillDuotone as CirclesThreeIconFillDuotone } from './circles-three-fill-duotone';

export interface CirclesThreeIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CirclesThreeIcon = memo(forwardRef<SVGSVGElement, CirclesThreeIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CirclesThreeIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CirclesThreeIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CirclesThreeIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CirclesThreeIconFill ref={ref} {...props} />;
  if (duotone) return <CirclesThreeIconDuotone ref={ref} {...props} />;
  return <RegularCirclesThreeIcon ref={ref} {...props} />;
}));

CirclesThreeIcon.displayName = 'CirclesThreeIcon';

export { CirclesThreeIcon };
