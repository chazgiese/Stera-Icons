import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ScissorsIcon as ScissorsIconRegular } from './scissors';
import { ScissorsIconBold } from './scissors-bold';
import { ScissorsIconFilled } from './scissors-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ScissorsIconProps extends IconProps {
  variant?: IconVariant;
}

const ScissorsIcon = memo(forwardRef<SVGSVGElement, ScissorsIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ScissorsIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ScissorsIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ScissorsIconRegular ref={ref} {...props} />;
  }
}));

ScissorsIcon.displayName = 'ScissorsIcon';

export { ScissorsIcon };
