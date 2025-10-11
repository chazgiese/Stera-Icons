import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PeaceIcon as PeaceIconRegular } from './peace';
import { PeaceIconBold } from './peace-bold';
import { PeaceIconFilled } from './peace-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface PeaceIconProps extends IconProps {
  variant?: IconVariant;
}

const PeaceIcon = memo(forwardRef<SVGSVGElement, PeaceIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PeaceIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PeaceIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <PeaceIconRegular ref={ref} {...props} />;
  }
}));

PeaceIcon.displayName = 'PeaceIcon';

export { PeaceIcon };
