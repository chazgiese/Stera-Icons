import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PenNibIcon as PenNibIconRegular } from './pen-nib';
import { PenNibIconBold } from './pen-nib-bold';
import { PenNibIconFilled } from './pen-nib-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface PenNibIconProps extends IconProps {
  variant?: IconVariant;
}

const PenNibIcon = memo(forwardRef<SVGSVGElement, PenNibIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PenNibIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PenNibIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <PenNibIconRegular ref={ref} {...props} />;
  }
}));

PenNibIcon.displayName = 'PenNibIcon';

export { PenNibIcon };
