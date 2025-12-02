import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ToyBrickIcon as RegularToyBrickIcon } from './toy-brick';
import { ToyBrickIconBold } from './toy-brick-bold';
import { ToyBrickIconFilled } from './toy-brick-filled';
import { ToyBrickIconFilltone } from './toy-brick-filltone';
import { ToyBrickIconLinetone } from './toy-brick-linetone';

export interface ToyBrickIconProps extends IconProps {
  variant?: IconVariant;
}

const ToyBrickIcon = memo(forwardRef<SVGSVGElement, ToyBrickIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ToyBrickIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ToyBrickIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ToyBrickIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ToyBrickIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularToyBrickIcon ref={ref} {...props} />;
  }
}));

ToyBrickIcon.displayName = 'ToyBrickIcon';

export { ToyBrickIcon };
