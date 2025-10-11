import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PlusCircleIcon as PlusCircleIconRegular } from './plus-circle';
import { PlusCircleIconBold } from './plus-circle-bold';
import { PlusCircleIconFilled } from './plus-circle-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <PlusCircleIconRegular ref={ref} {...props} />;
  }
}));

PlusCircleIcon.displayName = 'PlusCircleIcon';

export { PlusCircleIcon };
