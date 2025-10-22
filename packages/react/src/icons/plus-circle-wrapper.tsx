import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { PlusCircleIcon as PlusCircleIconRegular } from './plus-circle';
import { PlusCircleIconBold } from './plus-circle-bold';
import { PlusCircleIconFilled } from './plus-circle-filled';
import { PlusCircleIconFilltone } from './plus-circle-filltone';
import { PlusCircleIconLinetone } from './plus-circle-linetone';

export interface PlusCircleIconProps extends IconProps {
  variant?: IconVariant;
}

const PlusCircleIcon = memo(forwardRef<SVGSVGElement, PlusCircleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PlusCircleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PlusCircleIconBold ref={ref} {...props} />;
    case 'filltone':
      return <PlusCircleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <PlusCircleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <PlusCircleIconRegular ref={ref} {...props} />;
  }
}));

PlusCircleIcon.displayName = 'PlusCircleIcon';

export { PlusCircleIcon };
