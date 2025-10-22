import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CircleDivideCrossIcon as RegularCircleDivideCrossIcon } from './circle-divide-cross';
import { CircleDivideCrossIconBold } from './circle-divide-cross-bold';
import { CircleDivideCrossIconFilled } from './circle-divide-cross-filled';
import { CircleDivideCrossIconFilltone } from './circle-divide-cross-filltone';
import { CircleDivideCrossIconLinetone } from './circle-divide-cross-linetone';

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
    case 'filltone':
      return <CircleDivideCrossIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CircleDivideCrossIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularCircleDivideCrossIcon ref={ref} {...props} />;
  }
}));

CircleDivideCrossIcon.displayName = 'CircleDivideCrossIcon';

export { CircleDivideCrossIcon };
