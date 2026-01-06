import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DuplicatePlusIcon as RegularDuplicatePlusIcon } from './duplicate-plus';
import { DuplicatePlusIconDuotone as DuplicatePlusIconDuotone } from './duplicate-plus-duotone';
import { DuplicatePlusIconBold as DuplicatePlusIconBold } from './duplicate-plus-bold';
import { DuplicatePlusIconBoldDuotone as DuplicatePlusIconBoldDuotone } from './duplicate-plus-bold-duotone';
import { DuplicatePlusIconFill as DuplicatePlusIconFill } from './duplicate-plus-fill';
import { DuplicatePlusIconFillDuotone as DuplicatePlusIconFillDuotone } from './duplicate-plus-fill-duotone';

export interface DuplicatePlusIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const DuplicatePlusIcon = memo(forwardRef<SVGSVGElement, DuplicatePlusIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <DuplicatePlusIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <DuplicatePlusIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <DuplicatePlusIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <DuplicatePlusIconFill ref={ref} {...props} />;
  if (duotone) return <DuplicatePlusIconDuotone ref={ref} {...props} />;
  return <RegularDuplicatePlusIcon ref={ref} {...props} />;
}));

DuplicatePlusIcon.displayName = 'DuplicatePlusIcon';

export { DuplicatePlusIcon };
