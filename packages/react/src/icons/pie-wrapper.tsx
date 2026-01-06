import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PieIcon as RegularPieIcon } from './pie';
import { PieIconDuotone as PieIconDuotone } from './pie-duotone';
import { PieIconBold as PieIconBold } from './pie-bold';
import { PieIconBoldDuotone as PieIconBoldDuotone } from './pie-bold-duotone';
import { PieIconFill as PieIconFill } from './pie-fill';
import { PieIconFillDuotone as PieIconFillDuotone } from './pie-fill-duotone';

export interface PieIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const PieIcon = memo(forwardRef<SVGSVGElement, PieIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <PieIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <PieIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <PieIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <PieIconFill ref={ref} {...props} />;
  if (duotone) return <PieIconDuotone ref={ref} {...props} />;
  return <RegularPieIcon ref={ref} {...props} />;
}));

PieIcon.displayName = 'PieIcon';

export { PieIcon };
