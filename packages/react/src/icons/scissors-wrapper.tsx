import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ScissorsIcon as ScissorsIconRegular } from './scissors';
import { ScissorsIconBold } from './scissors-bold';
import { ScissorsIconFilled } from './scissors-filled';
import { ScissorsIconFilltone } from './scissors-filltone';
import { ScissorsIconLinetone } from './scissors-linetone';

export interface ScissorsIconProps extends IconProps {
  variant?: IconVariant;
}

const ScissorsIcon = memo(forwardRef<SVGSVGElement, ScissorsIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ScissorsIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ScissorsIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ScissorsIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ScissorsIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ScissorsIconRegular ref={ref} {...props} />;
  }
}));

ScissorsIcon.displayName = 'ScissorsIcon';

export { ScissorsIcon };
