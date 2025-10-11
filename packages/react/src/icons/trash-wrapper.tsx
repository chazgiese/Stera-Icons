import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TrashIcon as TrashIconRegular } from './trash';
import { TrashIconBold } from './trash-bold';
import { TrashIconFilled } from './trash-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <TrashIconRegular ref={ref} {...props} />;
  }
}));

TrashIcon.displayName = 'TrashIcon';

export { TrashIcon };
