import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BottleIcon as BottleIconRegular } from './bottle';
import { BottleIconBold } from './bottle-bold';
import { BottleIconFilled } from './bottle-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface BottleIconProps extends IconProps {
  variant?: IconVariant;
}

const BottleIcon = memo(forwardRef<SVGSVGElement, BottleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BottleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BottleIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <BottleIconRegular ref={ref} {...props} />;
  }
}));

BottleIcon.displayName = 'BottleIcon';

export { BottleIcon };
