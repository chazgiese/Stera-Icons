import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { TrashIcon as RegularTrashIcon } from './trash';
import { TrashIconBold } from './trash-bold';
import { TrashIconFilled } from './trash-filled';
import { TrashIconFilltone } from './trash-filltone';
import { TrashIconLinetone } from './trash-linetone';

export interface TrashIconProps extends IconProps {
  variant?: IconVariant;
}

const TrashIcon = memo(forwardRef<SVGSVGElement, TrashIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <TrashIconFilled ref={ref} {...props} />;
    case 'bold':
      return <TrashIconBold ref={ref} {...props} />;
    case 'filltone':
      return <TrashIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <TrashIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularTrashIcon ref={ref} {...props} />;
  }
}));

TrashIcon.displayName = 'TrashIcon';

export { TrashIcon };
