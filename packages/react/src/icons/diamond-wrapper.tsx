import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DiamondIcon as DiamondIconRegular } from './diamond';
import { DiamondIconBold } from './diamond-bold';
import { DiamondIconFilled } from './diamond-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface DiamondIconProps extends IconProps {
  variant?: IconVariant;
}

const DiamondIcon = memo(forwardRef<SVGSVGElement, DiamondIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <DiamondIconFilled ref={ref} {...props} />;
    case 'bold':
      return <DiamondIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <DiamondIconRegular ref={ref} {...props} />;
  }
}));

DiamondIcon.displayName = 'DiamondIcon';

export { DiamondIcon };
