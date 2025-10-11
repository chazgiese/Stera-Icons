import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BellXIcon as BellXIconRegular } from './bell-x';
import { BellXIconBold } from './bell-x-bold';
import { BellXIconFilled } from './bell-x-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface BellXIconProps extends IconProps {
  variant?: IconVariant;
}

const BellXIcon = memo(forwardRef<SVGSVGElement, BellXIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BellXIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BellXIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <BellXIconRegular ref={ref} {...props} />;
  }
}));

BellXIcon.displayName = 'BellXIcon';

export { BellXIcon };
