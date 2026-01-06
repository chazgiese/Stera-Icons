import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HandbagIcon as RegularHandbagIcon } from './handbag';
import { HandbagIconDuotone as HandbagIconDuotone } from './handbag-duotone';
import { HandbagIconBold as HandbagIconBold } from './handbag-bold';
import { HandbagIconBoldDuotone as HandbagIconBoldDuotone } from './handbag-bold-duotone';
import { HandbagIconFill as HandbagIconFill } from './handbag-fill';
import { HandbagIconFillDuotone as HandbagIconFillDuotone } from './handbag-fill-duotone';

export interface HandbagIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const HandbagIcon = memo(forwardRef<SVGSVGElement, HandbagIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <HandbagIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <HandbagIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <HandbagIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <HandbagIconFill ref={ref} {...props} />;
  if (duotone) return <HandbagIconDuotone ref={ref} {...props} />;
  return <RegularHandbagIcon ref={ref} {...props} />;
}));

HandbagIcon.displayName = 'HandbagIcon';

export { HandbagIcon };
