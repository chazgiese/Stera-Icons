import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DuplicateIcon as RegularDuplicateIcon } from './duplicate';
import { DuplicateIconDuotone as DuplicateIconDuotone } from './duplicate-duotone';
import { DuplicateIconBold as DuplicateIconBold } from './duplicate-bold';
import { DuplicateIconBoldDuotone as DuplicateIconBoldDuotone } from './duplicate-bold-duotone';
import { DuplicateIconFill as DuplicateIconFill } from './duplicate-fill';
import { DuplicateIconFillDuotone as DuplicateIconFillDuotone } from './duplicate-fill-duotone';

export interface DuplicateIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const DuplicateIcon = memo(forwardRef<SVGSVGElement, DuplicateIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <DuplicateIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <DuplicateIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <DuplicateIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <DuplicateIconFill ref={ref} {...props} />;
  if (duotone) return <DuplicateIconDuotone ref={ref} {...props} />;
  return <RegularDuplicateIcon ref={ref} {...props} />;
}));

DuplicateIcon.displayName = 'DuplicateIcon';

export { DuplicateIcon };
