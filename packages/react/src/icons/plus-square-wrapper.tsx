import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { PlusSquareIcon as RegularPlusSquareIcon } from './plus-square';
import { PlusSquareIconBold } from './plus-square-bold';
import { PlusSquareIconFilled } from './plus-square-filled';
import { PlusSquareIconFilltone } from './plus-square-filltone';
import { PlusSquareIconLinetone } from './plus-square-linetone';

export interface PlusSquareIconProps extends IconProps {
  variant?: IconVariant;
}

const PlusSquareIcon = memo(forwardRef<SVGSVGElement, PlusSquareIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PlusSquareIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PlusSquareIconBold ref={ref} {...props} />;
    case 'filltone':
      return <PlusSquareIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <PlusSquareIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularPlusSquareIcon ref={ref} {...props} />;
  }
}));

PlusSquareIcon.displayName = 'PlusSquareIcon';

export { PlusSquareIcon };
