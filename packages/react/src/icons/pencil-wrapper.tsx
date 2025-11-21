import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { PencilIcon as RegularPencilIcon } from './pencil';
import { PencilIconBold } from './pencil-bold';
import { PencilIconFilled } from './pencil-filled';
import { PencilIconFilltone } from './pencil-filltone';
import { PencilIconLinetone } from './pencil-linetone';

export interface PencilIconProps extends IconProps {
  variant?: IconVariant;
}

const PencilIcon = memo(forwardRef<SVGSVGElement, PencilIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PencilIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PencilIconBold ref={ref} {...props} />;
    case 'filltone':
      return <PencilIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <PencilIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularPencilIcon ref={ref} {...props} />;
  }
}));

PencilIcon.displayName = 'PencilIcon';

export { PencilIcon };
