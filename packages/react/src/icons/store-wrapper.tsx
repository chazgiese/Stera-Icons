import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { StoreIcon as RegularStoreIcon } from './store';
import { StoreIconDuotone as StoreIconDuotone } from './store-duotone';
import { StoreIconBold as StoreIconBold } from './store-bold';
import { StoreIconBoldDuotone as StoreIconBoldDuotone } from './store-bold-duotone';
import { StoreIconFill as StoreIconFill } from './store-fill';
import { StoreIconFillDuotone as StoreIconFillDuotone } from './store-fill-duotone';

export interface StoreIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const StoreIcon = memo(forwardRef<SVGSVGElement, StoreIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <StoreIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <StoreIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <StoreIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <StoreIconFill ref={ref} {...props} />;
  if (duotone) return <StoreIconDuotone ref={ref} {...props} />;
  return <RegularStoreIcon ref={ref} {...props} />;
}));

StoreIcon.displayName = 'StoreIcon';

export { StoreIcon };
