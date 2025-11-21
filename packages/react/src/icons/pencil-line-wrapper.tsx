import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { PencilLineIcon as RegularPencilLineIcon } from './pencil-line';
import { PencilLineIconBold } from './pencil-line-bold';
import { PencilLineIconFilled } from './pencil-line-filled';
import { PencilLineIconFilltone } from './pencil-line-filltone';
import { PencilLineIconLinetone } from './pencil-line-linetone';

export interface PencilLineIconProps extends IconProps {
  variant?: IconVariant;
}

const PencilLineIcon = memo(forwardRef<SVGSVGElement, PencilLineIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PencilLineIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PencilLineIconBold ref={ref} {...props} />;
    case 'filltone':
      return <PencilLineIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <PencilLineIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularPencilLineIcon ref={ref} {...props} />;
  }
}));

PencilLineIcon.displayName = 'PencilLineIcon';

export { PencilLineIcon };
