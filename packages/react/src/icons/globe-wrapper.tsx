import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { GlobeIcon as GlobeIconRegular } from './globe';
import { GlobeIconBold } from './globe-bold';
import { GlobeIconFilled } from './globe-filled';
import { GlobeIconFilltone } from './globe-filltone';
import { GlobeIconLinetone } from './globe-linetone';

export interface GlobeIconProps extends IconProps {
  variant?: IconVariant;
}

const GlobeIcon = memo(forwardRef<SVGSVGElement, GlobeIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <GlobeIconFilled ref={ref} {...props} />;
    case 'bold':
      return <GlobeIconBold ref={ref} {...props} />;
    case 'filltone':
      return <GlobeIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <GlobeIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <GlobeIconRegular ref={ref} {...props} />;
  }
}));

GlobeIcon.displayName = 'GlobeIcon';

export { GlobeIcon };
