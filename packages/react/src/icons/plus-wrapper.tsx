import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PlusIcon as PlusIconRegular } from './plus';
import { PlusIconBold } from './plus-bold';
import { PlusIconFilled } from './plus-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface PlusIconProps extends IconProps {
  variant?: IconVariant;
}

const PlusIcon = memo(forwardRef<SVGSVGElement, PlusIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PlusIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PlusIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <PlusIconRegular ref={ref} {...props} />;
  }
}));

PlusIcon.displayName = 'PlusIcon';

export { PlusIcon };
