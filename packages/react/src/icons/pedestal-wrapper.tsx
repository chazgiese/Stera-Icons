import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { PedestalIcon as RegularPedestalIcon } from './pedestal';
import { PedestalIconBold } from './pedestal-bold';
import { PedestalIconFilled } from './pedestal-filled';
import { PedestalIconFilltone } from './pedestal-filltone';
import { PedestalIconLinetone } from './pedestal-linetone';

export interface PedestalIconProps extends IconProps {
  variant?: IconVariant;
}

const PedestalIcon = memo(forwardRef<SVGSVGElement, PedestalIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PedestalIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PedestalIconBold ref={ref} {...props} />;
    case 'filltone':
      return <PedestalIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <PedestalIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularPedestalIcon ref={ref} {...props} />;
  }
}));

PedestalIcon.displayName = 'PedestalIcon';

export { PedestalIcon };
