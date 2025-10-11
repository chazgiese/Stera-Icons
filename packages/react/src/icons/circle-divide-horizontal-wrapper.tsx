import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CircleDivideHorizontalIcon as CircleDivideHorizontalIconRegular } from './circle-divide-horizontal';
import { CircleDivideHorizontalIconBold } from './circle-divide-horizontal-bold';
import { CircleDivideHorizontalIconFilled } from './circle-divide-horizontal-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface CircleDivideHorizontalIconProps extends IconProps {
  variant?: IconVariant;
}

const CircleDivideHorizontalIcon = memo(forwardRef<SVGSVGElement, CircleDivideHorizontalIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CircleDivideHorizontalIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CircleDivideHorizontalIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <CircleDivideHorizontalIconRegular ref={ref} {...props} />;
  }
}));

CircleDivideHorizontalIcon.displayName = 'CircleDivideHorizontalIcon';

export { CircleDivideHorizontalIcon };
