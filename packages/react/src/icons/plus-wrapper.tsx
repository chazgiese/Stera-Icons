import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PlusIcon as RegularPlusIcon } from './plus';
import { PlusIconDuotone as PlusIconDuotone } from './plus-duotone';
import { PlusIconBold as PlusIconBold } from './plus-bold';
import { PlusIconBoldDuotone as PlusIconBoldDuotone } from './plus-bold-duotone';
import { PlusIconFill as PlusIconFill } from './plus-fill';
import { PlusIconFillDuotone as PlusIconFillDuotone } from './plus-fill-duotone';

export interface PlusIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const PlusIcon = memo(forwardRef<SVGSVGElement, PlusIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <PlusIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <PlusIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <PlusIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <PlusIconFill ref={ref} {...props} />;
  if (duotone) return <PlusIconDuotone ref={ref} {...props} />;
  return <RegularPlusIcon ref={ref} {...props} />;
}));

PlusIcon.displayName = 'PlusIcon';

export { PlusIcon };
