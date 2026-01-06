import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PenIcon as RegularPenIcon } from './pen';
import { PenIconDuotone as PenIconDuotone } from './pen-duotone';
import { PenIconBold as PenIconBold } from './pen-bold';
import { PenIconBoldDuotone as PenIconBoldDuotone } from './pen-bold-duotone';
import { PenIconFill as PenIconFill } from './pen-fill';
import { PenIconFillDuotone as PenIconFillDuotone } from './pen-fill-duotone';

export interface PenIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const PenIcon = memo(forwardRef<SVGSVGElement, PenIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <PenIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <PenIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <PenIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <PenIconFill ref={ref} {...props} />;
  if (duotone) return <PenIconDuotone ref={ref} {...props} />;
  return <RegularPenIcon ref={ref} {...props} />;
}));

PenIcon.displayName = 'PenIcon';

export { PenIcon };
