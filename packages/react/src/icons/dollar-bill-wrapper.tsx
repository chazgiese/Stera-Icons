import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DollarBillIcon as RegularDollarBillIcon } from './dollar-bill';
import { DollarBillIconDuotone as DollarBillIconDuotone } from './dollar-bill-duotone';
import { DollarBillIconBold as DollarBillIconBold } from './dollar-bill-bold';
import { DollarBillIconBoldDuotone as DollarBillIconBoldDuotone } from './dollar-bill-bold-duotone';
import { DollarBillIconFill as DollarBillIconFill } from './dollar-bill-fill';
import { DollarBillIconFillDuotone as DollarBillIconFillDuotone } from './dollar-bill-fill-duotone';

export interface DollarBillIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const DollarBillIcon = memo(forwardRef<SVGSVGElement, DollarBillIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <DollarBillIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <DollarBillIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <DollarBillIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <DollarBillIconFill ref={ref} {...props} />;
  if (duotone) return <DollarBillIconDuotone ref={ref} {...props} />;
  return <RegularDollarBillIcon ref={ref} {...props} />;
}));

DollarBillIcon.displayName = 'DollarBillIcon';

export { DollarBillIcon };
