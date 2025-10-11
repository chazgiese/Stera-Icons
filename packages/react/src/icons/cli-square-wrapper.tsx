import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CliSquareIcon as CliSquareIconRegular } from './cli-square';
import { CliSquareIconBold } from './cli-square-bold';
import { CliSquareIconFilled } from './cli-square-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <CliSquareIconRegular ref={ref} {...props} />;
  }
}));

CliSquareIcon.displayName = 'CliSquareIcon';

export { CliSquareIcon };
