import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CliSquareIcon as RegularCliSquareIcon } from './cli-square';
import { CliSquareIconBold } from './cli-square-bold';
import { CliSquareIconFilled } from './cli-square-filled';
import { CliSquareIconFilltone } from './cli-square-filltone';
import { CliSquareIconLinetone } from './cli-square-linetone';

export interface CliSquareIconProps extends IconProps {
  variant?: IconVariant;
}

const CliSquareIcon = memo(forwardRef<SVGSVGElement, CliSquareIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CliSquareIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CliSquareIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CliSquareIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CliSquareIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularCliSquareIcon ref={ref} {...props} />;
  }
}));

CliSquareIcon.displayName = 'CliSquareIcon';

export { CliSquareIcon };
