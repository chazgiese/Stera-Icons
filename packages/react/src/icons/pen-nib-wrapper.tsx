import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PenNibIcon as RegularPenNibIcon } from './pen-nib';
import { PenNibIconDuotone as PenNibIconDuotone } from './pen-nib-duotone';
import { PenNibIconBold as PenNibIconBold } from './pen-nib-bold';
import { PenNibIconBoldDuotone as PenNibIconBoldDuotone } from './pen-nib-bold-duotone';
import { PenNibIconFill as PenNibIconFill } from './pen-nib-fill';
import { PenNibIconFillDuotone as PenNibIconFillDuotone } from './pen-nib-fill-duotone';

export interface PenNibIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const PenNibIcon = memo(forwardRef<SVGSVGElement, PenNibIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <PenNibIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <PenNibIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <PenNibIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <PenNibIconFill ref={ref} {...props} />;
  if (duotone) return <PenNibIconDuotone ref={ref} {...props} />;
  return <RegularPenNibIcon ref={ref} {...props} />;
}));

PenNibIcon.displayName = 'PenNibIcon';

export { PenNibIcon };
