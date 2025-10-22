import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { AstriskAltIcon as RegularAstriskAltIcon } from './astrisk-alt';
import { AstriskAltIconBold } from './astrisk-alt-bold';
import { AstriskAltIconFilled } from './astrisk-alt-filled';
import { AstriskAltIconFilltone } from './astrisk-alt-filltone';
import { AstriskAltIconLinetone } from './astrisk-alt-linetone';

export interface AstriskAltIconProps extends IconProps {
  variant?: IconVariant;
}

const AstriskAltIcon = memo(forwardRef<SVGSVGElement, AstriskAltIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <AstriskAltIconFilled ref={ref} {...props} />;
    case 'bold':
      return <AstriskAltIconBold ref={ref} {...props} />;
    case 'filltone':
      return <AstriskAltIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <AstriskAltIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularAstriskAltIcon ref={ref} {...props} />;
  }
}));

AstriskAltIcon.displayName = 'AstriskAltIcon';

export { AstriskAltIcon };
