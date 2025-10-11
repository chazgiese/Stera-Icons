import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CliCircleIcon as CliCircleIconRegular } from './cli-circle';
import { CliCircleIconBold } from './cli-circle-bold';
import { CliCircleIconFilled } from './cli-circle-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <CliCircleIconRegular ref={ref} {...props} />;
  }
}));

CliCircleIcon.displayName = 'CliCircleIcon';

export { CliCircleIcon };
