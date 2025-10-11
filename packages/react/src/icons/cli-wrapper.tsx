import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CliIcon as CliIconRegular } from './cli';
import { CliIconBold } from './cli-bold';
import { CliIconFilled } from './cli-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <CliIconRegular ref={ref} {...props} />;
  }
}));

CliIcon.displayName = 'CliIcon';

export { CliIcon };
