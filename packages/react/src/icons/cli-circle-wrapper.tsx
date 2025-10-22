import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CliCircleIcon as CliCircleIconRegular } from './cli-circle';
import { CliCircleIconBold } from './cli-circle-bold';
import { CliCircleIconFilled } from './cli-circle-filled';
import { CliCircleIconFilltone } from './cli-circle-filltone';
import { CliCircleIconLinetone } from './cli-circle-linetone';

export interface CliCircleIconProps extends IconProps {
  variant?: IconVariant;
}

const CliCircleIcon = memo(forwardRef<SVGSVGElement, CliCircleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CliCircleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CliCircleIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CliCircleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CliCircleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <CliCircleIconRegular ref={ref} {...props} />;
  }
}));

CliCircleIcon.displayName = 'CliCircleIcon';

export { CliCircleIcon };
