import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PencilIcon as PencilIconRegular } from './pencil';
import { PencilIconBold } from './pencil-bold';
import { PencilIconFilled } from './pencil-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <PencilIconRegular ref={ref} {...props} />;
  }
}));

PencilIcon.displayName = 'PencilIcon';

export { PencilIcon };
