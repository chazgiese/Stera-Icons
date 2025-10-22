import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SeedlingIcon as RegularSeedlingIcon } from './seedling';
import { SeedlingIconBold } from './seedling-bold';
import { SeedlingIconFilled } from './seedling-filled';
import { SeedlingIconFilltone } from './seedling-filltone';
import { SeedlingIconLinetone } from './seedling-linetone';

export interface SeedlingIconProps extends IconProps {
  variant?: IconVariant;
}

const SeedlingIcon = memo(forwardRef<SVGSVGElement, SeedlingIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SeedlingIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SeedlingIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SeedlingIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SeedlingIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularSeedlingIcon ref={ref} {...props} />;
  }
}));

SeedlingIcon.displayName = 'SeedlingIcon';

export { SeedlingIcon };
