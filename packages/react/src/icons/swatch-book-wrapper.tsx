import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SwatchBookIcon as RegularSwatchBookIcon } from './swatch-book';
import { SwatchBookIconBold } from './swatch-book-bold';
import { SwatchBookIconFilled } from './swatch-book-filled';
import { SwatchBookIconFilltone } from './swatch-book-filltone';
import { SwatchBookIconLinetone } from './swatch-book-linetone';

export interface SwatchBookIconProps extends IconProps {
  variant?: IconVariant;
}

const SwatchBookIcon = memo(forwardRef<SVGSVGElement, SwatchBookIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SwatchBookIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SwatchBookIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SwatchBookIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SwatchBookIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularSwatchBookIcon ref={ref} {...props} />;
  }
}));

SwatchBookIcon.displayName = 'SwatchBookIcon';

export { SwatchBookIcon };
