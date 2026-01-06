import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BagIcon as RegularBagIcon } from './bag';
import { BagIconDuotone as BagIconDuotone } from './bag-duotone';
import { BagIconBold as BagIconBold } from './bag-bold';
import { BagIconBoldDuotone as BagIconBoldDuotone } from './bag-bold-duotone';
import { BagIconFill as BagIconFill } from './bag-fill';
import { BagIconFillDuotone as BagIconFillDuotone } from './bag-fill-duotone';

export interface BagIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BagIcon = memo(forwardRef<SVGSVGElement, BagIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BagIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BagIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BagIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BagIconFill ref={ref} {...props} />;
  if (duotone) return <BagIconDuotone ref={ref} {...props} />;
  return <RegularBagIcon ref={ref} {...props} />;
}));

BagIcon.displayName = 'BagIcon';

export { BagIcon };
