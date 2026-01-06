import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SeedlingIcon as RegularSeedlingIcon } from './seedling';
import { SeedlingIconDuotone as SeedlingIconDuotone } from './seedling-duotone';
import { SeedlingIconBold as SeedlingIconBold } from './seedling-bold';
import { SeedlingIconBoldDuotone as SeedlingIconBoldDuotone } from './seedling-bold-duotone';
import { SeedlingIconFill as SeedlingIconFill } from './seedling-fill';
import { SeedlingIconFillDuotone as SeedlingIconFillDuotone } from './seedling-fill-duotone';

export interface SeedlingIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SeedlingIcon = memo(forwardRef<SVGSVGElement, SeedlingIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SeedlingIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SeedlingIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SeedlingIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SeedlingIconFill ref={ref} {...props} />;
  if (duotone) return <SeedlingIconDuotone ref={ref} {...props} />;
  return <RegularSeedlingIcon ref={ref} {...props} />;
}));

SeedlingIcon.displayName = 'SeedlingIcon';

export { SeedlingIcon };
