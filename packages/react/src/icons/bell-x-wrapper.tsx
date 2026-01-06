import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BellXIcon as RegularBellXIcon } from './bell-x';
import { BellXIconDuotone as BellXIconDuotone } from './bell-x-duotone';
import { BellXIconBold as BellXIconBold } from './bell-x-bold';
import { BellXIconBoldDuotone as BellXIconBoldDuotone } from './bell-x-bold-duotone';
import { BellXIconFill as BellXIconFill } from './bell-x-fill';
import { BellXIconFillDuotone as BellXIconFillDuotone } from './bell-x-fill-duotone';

export interface BellXIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BellXIcon = memo(forwardRef<SVGSVGElement, BellXIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BellXIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BellXIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BellXIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BellXIconFill ref={ref} {...props} />;
  if (duotone) return <BellXIconDuotone ref={ref} {...props} />;
  return <RegularBellXIcon ref={ref} {...props} />;
}));

BellXIcon.displayName = 'BellXIcon';

export { BellXIcon };
