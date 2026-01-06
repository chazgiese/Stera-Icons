import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HandLeftIcon as RegularHandLeftIcon } from './hand-left';
import { HandLeftIconDuotone as HandLeftIconDuotone } from './hand-left-duotone';
import { HandLeftIconBold as HandLeftIconBold } from './hand-left-bold';
import { HandLeftIconBoldDuotone as HandLeftIconBoldDuotone } from './hand-left-bold-duotone';
import { HandLeftIconFill as HandLeftIconFill } from './hand-left-fill';
import { HandLeftIconFillDuotone as HandLeftIconFillDuotone } from './hand-left-fill-duotone';

export interface HandLeftIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const HandLeftIcon = memo(forwardRef<SVGSVGElement, HandLeftIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <HandLeftIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <HandLeftIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <HandLeftIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <HandLeftIconFill ref={ref} {...props} />;
  if (duotone) return <HandLeftIconDuotone ref={ref} {...props} />;
  return <RegularHandLeftIcon ref={ref} {...props} />;
}));

HandLeftIcon.displayName = 'HandLeftIcon';

export { HandLeftIcon };
