import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CliIcon as CliIconRegular } from './cli';
import { CliIconBold } from './cli-bold';
import { CliIconFilled } from './cli-filled';
import { CliIconFilltone } from './cli-filltone';
import { CliIconLinetone } from './cli-linetone';

export interface CliIconProps extends IconProps {
  variant?: IconVariant;
}

const CliIcon = memo(forwardRef<SVGSVGElement, CliIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CliIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CliIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CliIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CliIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <CliIconRegular ref={ref} {...props} />;
  }
}));

CliIcon.displayName = 'CliIcon';

export { CliIcon };
