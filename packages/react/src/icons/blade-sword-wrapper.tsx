import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BladeSwordIcon as BladeSwordIconRegular } from './blade-sword';
import { BladeSwordIconBold } from './blade-sword-bold';
import { BladeSwordIconFilled } from './blade-sword-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface BladeSwordIconProps extends IconProps {
  variant?: IconVariant;
}

const BladeSwordIcon = memo(forwardRef<SVGSVGElement, BladeSwordIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BladeSwordIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BladeSwordIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <BladeSwordIconRegular ref={ref} {...props} />;
  }
}));

BladeSwordIcon.displayName = 'BladeSwordIcon';

export { BladeSwordIcon };
