import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PlusCircleIcon as RegularPlusCircleIcon } from './plus-circle';
import { PlusCircleIconDuotone as PlusCircleIconDuotone } from './plus-circle-duotone';
import { PlusCircleIconBold as PlusCircleIconBold } from './plus-circle-bold';
import { PlusCircleIconBoldDuotone as PlusCircleIconBoldDuotone } from './plus-circle-bold-duotone';
import { PlusCircleIconFill as PlusCircleIconFill } from './plus-circle-fill';
import { PlusCircleIconFillDuotone as PlusCircleIconFillDuotone } from './plus-circle-fill-duotone';

export interface PlusCircleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const PlusCircleIcon = memo(forwardRef<SVGSVGElement, PlusCircleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <PlusCircleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <PlusCircleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <PlusCircleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <PlusCircleIconFill ref={ref} {...props} />;
  if (duotone) return <PlusCircleIconDuotone ref={ref} {...props} />;
  return <RegularPlusCircleIcon ref={ref} {...props} />;
}));

PlusCircleIcon.displayName = 'PlusCircleIcon';

export { PlusCircleIcon };
