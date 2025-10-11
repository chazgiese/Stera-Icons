import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowRotateLeftIcon as ArrowRotateLeftIconRegular } from './arrow-rotate-left';
import { ArrowRotateLeftIconBold } from './arrow-rotate-left-bold';
import { ArrowRotateLeftIconFilled } from './arrow-rotate-left-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowRotateLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowRotateLeftIcon = memo(forwardRef<SVGSVGElement, ArrowRotateLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowRotateLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowRotateLeftIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowRotateLeftIconRegular ref={ref} {...props} />;
  }
}));

ArrowRotateLeftIcon.displayName = 'ArrowRotateLeftIcon';

export { ArrowRotateLeftIcon };
