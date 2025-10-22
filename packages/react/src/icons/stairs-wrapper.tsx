import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { StairsIcon as RegularStairsIcon } from './stairs';
import { StairsIconBold } from './stairs-bold';
import { StairsIconFilled } from './stairs-filled';
import { StairsIconFilltone } from './stairs-filltone';
import { StairsIconLinetone } from './stairs-linetone';

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
    case 'filltone':
      return <StairsIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <StairsIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularStairsIcon ref={ref} {...props} />;
  }
}));

StairsIcon.displayName = 'StairsIcon';

export { StairsIcon };
