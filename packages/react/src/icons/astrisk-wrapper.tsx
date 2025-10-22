import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { AstriskIcon as RegularAstriskIcon } from './astrisk';
import { AstriskIconBold } from './astrisk-bold';
import { AstriskIconFilled } from './astrisk-filled';
import { AstriskIconFilltone } from './astrisk-filltone';
import { AstriskIconLinetone } from './astrisk-linetone';

export interface AstriskIconProps extends IconProps {
  variant?: IconVariant;
}

const AstriskIcon = memo(forwardRef<SVGSVGElement, AstriskIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <AstriskIconFilled ref={ref} {...props} />;
    case 'bold':
      return <AstriskIconBold ref={ref} {...props} />;
    case 'filltone':
      return <AstriskIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <AstriskIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularAstriskIcon ref={ref} {...props} />;
  }
}));

AstriskIcon.displayName = 'AstriskIcon';

export { AstriskIcon };
