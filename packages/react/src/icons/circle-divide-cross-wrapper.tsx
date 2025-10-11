import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CircleDivideCrossIcon as CircleDivideCrossIconRegular } from './circle-divide-cross';
import { CircleDivideCrossIconBold } from './circle-divide-cross-bold';
import { CircleDivideCrossIconFilled } from './circle-divide-cross-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface CircleDivideCrossIconProps extends IconProps {
  variant?: IconVariant;
}

const CircleDivideCrossIcon = memo(forwardRef<SVGSVGElement, CircleDivideCrossIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CircleDivideCrossIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CircleDivideCrossIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <CircleDivideCrossIconRegular ref={ref} {...props} />;
  }
}));

CircleDivideCrossIcon.displayName = 'CircleDivideCrossIcon';

export { CircleDivideCrossIcon };
