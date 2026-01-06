import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BottleIcon as RegularBottleIcon } from './bottle';
import { BottleIconDuotone as BottleIconDuotone } from './bottle-duotone';
import { BottleIconBold as BottleIconBold } from './bottle-bold';
import { BottleIconBoldDuotone as BottleIconBoldDuotone } from './bottle-bold-duotone';
import { BottleIconFill as BottleIconFill } from './bottle-fill';
import { BottleIconFillDuotone as BottleIconFillDuotone } from './bottle-fill-duotone';

export interface BottleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BottleIcon = memo(forwardRef<SVGSVGElement, BottleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BottleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BottleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BottleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BottleIconFill ref={ref} {...props} />;
  if (duotone) return <BottleIconDuotone ref={ref} {...props} />;
  return <RegularBottleIcon ref={ref} {...props} />;
}));

BottleIcon.displayName = 'BottleIcon';

export { BottleIcon };
