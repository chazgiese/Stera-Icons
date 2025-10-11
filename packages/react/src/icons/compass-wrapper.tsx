import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CompassIcon as CompassIconRegular } from './compass';
import { CompassIconBold } from './compass-bold';
import { CompassIconFilled } from './compass-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface CompassIconProps extends IconProps {
  variant?: IconVariant;
}

const CompassIcon = memo(forwardRef<SVGSVGElement, CompassIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CompassIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CompassIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <CompassIconRegular ref={ref} {...props} />;
  }
}));

CompassIcon.displayName = 'CompassIcon';

export { CompassIcon };
