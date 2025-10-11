import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CubicGraphIcon as CubicGraphIconRegular } from './cubic-graph';
import { CubicGraphIconBold } from './cubic-graph-bold';
import { CubicGraphIconFilled } from './cubic-graph-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface CubicGraphIconProps extends IconProps {
  variant?: IconVariant;
}

const CubicGraphIcon = memo(forwardRef<SVGSVGElement, CubicGraphIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CubicGraphIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CubicGraphIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <CubicGraphIconRegular ref={ref} {...props} />;
  }
}));

CubicGraphIcon.displayName = 'CubicGraphIcon';

export { CubicGraphIcon };
