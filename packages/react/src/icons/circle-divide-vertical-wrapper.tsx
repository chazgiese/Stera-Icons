import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CircleDivideVerticalIcon as CircleDivideVerticalIconRegular } from './circle-divide-vertical';
import { CircleDivideVerticalIconBold } from './circle-divide-vertical-bold';
import { CircleDivideVerticalIconFilled } from './circle-divide-vertical-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface CircleDivideVerticalIconProps extends IconProps {
  variant?: IconVariant;
}

const CircleDivideVerticalIcon = memo(forwardRef<SVGSVGElement, CircleDivideVerticalIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CircleDivideVerticalIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CircleDivideVerticalIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <CircleDivideVerticalIconRegular ref={ref} {...props} />;
  }
}));

CircleDivideVerticalIcon.displayName = 'CircleDivideVerticalIcon';

export { CircleDivideVerticalIcon };
