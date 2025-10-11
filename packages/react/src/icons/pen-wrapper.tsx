import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PenIcon as PenIconRegular } from './pen';
import { PenIconBold } from './pen-bold';
import { PenIconFilled } from './pen-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface PenIconProps extends IconProps {
  variant?: IconVariant;
}

const PenIcon = memo(forwardRef<SVGSVGElement, PenIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PenIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PenIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <PenIconRegular ref={ref} {...props} />;
  }
}));

PenIcon.displayName = 'PenIcon';

export { PenIcon };
