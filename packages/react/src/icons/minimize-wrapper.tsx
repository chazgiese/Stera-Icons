import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { MinimizeIcon as RegularMinimizeIcon } from './minimize';
import { MinimizeIconBold } from './minimize-bold';
import { MinimizeIconFilled } from './minimize-filled';
import { MinimizeIconFilltone } from './minimize-filltone';
import { MinimizeIconLinetone } from './minimize-linetone';

export interface MinimizeIconProps extends IconProps {
  variant?: IconVariant;
}

const MinimizeIcon = memo(forwardRef<SVGSVGElement, MinimizeIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MinimizeIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MinimizeIconBold ref={ref} {...props} />;
    case 'filltone':
      return <MinimizeIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <MinimizeIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularMinimizeIcon ref={ref} {...props} />;
  }
}));

MinimizeIcon.displayName = 'MinimizeIcon';

export { MinimizeIcon };
