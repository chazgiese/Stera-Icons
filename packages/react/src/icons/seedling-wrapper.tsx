import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SeedlingIcon as SeedlingIconRegular } from './seedling';
import { SeedlingIconBold } from './seedling-bold';
import { SeedlingIconFilled } from './seedling-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <SeedlingIconRegular ref={ref} {...props} />;
  }
}));

SeedlingIcon.displayName = 'SeedlingIcon';

export { SeedlingIcon };
