import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { StairsIcon as RegularStairsIcon } from './stairs';
import { StairsIconDuotone as StairsIconDuotone } from './stairs-duotone';
import { StairsIconBold as StairsIconBold } from './stairs-bold';
import { StairsIconBoldDuotone as StairsIconBoldDuotone } from './stairs-bold-duotone';
import { StairsIconFill as StairsIconFill } from './stairs-fill';
import { StairsIconFillDuotone as StairsIconFillDuotone } from './stairs-fill-duotone';

export interface StairsIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const StairsIcon = memo(forwardRef<SVGSVGElement, StairsIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <StairsIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <StairsIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <StairsIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <StairsIconFill ref={ref} {...props} />;
  if (duotone) return <StairsIconDuotone ref={ref} {...props} />;
  return <RegularStairsIcon ref={ref} {...props} />;
}));

StairsIcon.displayName = 'StairsIcon';

export { StairsIcon };
