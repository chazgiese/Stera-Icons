import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { PlugIcon as PlugIconRegular } from './plug';
import { PlugIconBold } from './plug-bold';
import { PlugIconFilled } from './plug-filled';
import { PlugIconFilltone } from './plug-filltone';
import { PlugIconLinetone } from './plug-linetone';

export interface PlugIconProps extends IconProps {
  variant?: IconVariant;
}

const PlugIcon = memo(forwardRef<SVGSVGElement, PlugIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PlugIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PlugIconBold ref={ref} {...props} />;
    case 'filltone':
      return <PlugIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <PlugIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <PlugIconRegular ref={ref} {...props} />;
  }
}));

PlugIcon.displayName = 'PlugIcon';

export { PlugIcon };
