import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { StairsIcon as StairsIconRegular } from './stairs';
import { StairsIconBold } from './stairs-bold';
import { StairsIconFilled } from './stairs-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface StairsIconProps extends IconProps {
  variant?: IconVariant;
}

const StairsIcon = memo(forwardRef<SVGSVGElement, StairsIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <StairsIconFilled ref={ref} {...props} />;
    case 'bold':
      return <StairsIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <StairsIconRegular ref={ref} {...props} />;
  }
}));

StairsIcon.displayName = 'StairsIcon';

export { StairsIcon };
