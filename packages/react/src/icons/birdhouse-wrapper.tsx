import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BirdhouseIcon as RegularBirdhouseIcon } from './birdhouse';
import { BirdhouseIconDuotone as BirdhouseIconDuotone } from './birdhouse-duotone';
import { BirdhouseIconBold as BirdhouseIconBold } from './birdhouse-bold';
import { BirdhouseIconBoldDuotone as BirdhouseIconBoldDuotone } from './birdhouse-bold-duotone';
import { BirdhouseIconFill as BirdhouseIconFill } from './birdhouse-fill';
import { BirdhouseIconFillDuotone as BirdhouseIconFillDuotone } from './birdhouse-fill-duotone';

export interface BirdhouseIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const BirdhouseIcon = memo(forwardRef<SVGSVGElement, BirdhouseIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <BirdhouseIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <BirdhouseIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <BirdhouseIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <BirdhouseIconFill ref={ref} {...props} />;
  if (duotone) return <BirdhouseIconDuotone ref={ref} {...props} />;
  return <RegularBirdhouseIcon ref={ref} {...props} />;
}));

BirdhouseIcon.displayName = 'BirdhouseIcon';

export { BirdhouseIcon };
