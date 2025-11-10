import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BirdhouseIcon as RegularBirdhouseIcon } from './birdhouse';
import { BirdhouseIconBold } from './birdhouse-bold';
import { BirdhouseIconFilled } from './birdhouse-filled';
import { BirdhouseIconFilltone } from './birdhouse-filltone';
import { BirdhouseIconLinetone } from './birdhouse-linetone';

export interface BirdhouseIconProps extends IconProps {
  variant?: IconVariant;
}

const BirdhouseIcon = memo(forwardRef<SVGSVGElement, BirdhouseIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BirdhouseIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BirdhouseIconBold ref={ref} {...props} />;
    case 'filltone':
      return <BirdhouseIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BirdhouseIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularBirdhouseIcon ref={ref} {...props} />;
  }
}));

BirdhouseIcon.displayName = 'BirdhouseIcon';

export { BirdhouseIcon };
