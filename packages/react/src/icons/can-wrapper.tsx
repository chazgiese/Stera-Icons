import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CanIcon as CanIconRegular } from './can';
import { CanIconBold } from './can-bold';
import { CanIconFilled } from './can-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface CanIconProps extends IconProps {
  variant?: IconVariant;
}

const CanIcon = memo(forwardRef<SVGSVGElement, CanIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CanIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CanIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <CanIconRegular ref={ref} {...props} />;
  }
}));

CanIcon.displayName = 'CanIcon';

export { CanIcon };
