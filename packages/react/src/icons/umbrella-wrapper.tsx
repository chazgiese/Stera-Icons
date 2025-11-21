import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { UmbrellaIcon as RegularUmbrellaIcon } from './umbrella';
import { UmbrellaIconBold } from './umbrella-bold';
import { UmbrellaIconFilled } from './umbrella-filled';
import { UmbrellaIconFilltone } from './umbrella-filltone';
import { UmbrellaIconLinetone } from './umbrella-linetone';

export interface UmbrellaIconProps extends IconProps {
  variant?: IconVariant;
}

const UmbrellaIcon = memo(forwardRef<SVGSVGElement, UmbrellaIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <UmbrellaIconFilled ref={ref} {...props} />;
    case 'bold':
      return <UmbrellaIconBold ref={ref} {...props} />;
    case 'filltone':
      return <UmbrellaIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <UmbrellaIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularUmbrellaIcon ref={ref} {...props} />;
  }
}));

UmbrellaIcon.displayName = 'UmbrellaIcon';

export { UmbrellaIcon };
