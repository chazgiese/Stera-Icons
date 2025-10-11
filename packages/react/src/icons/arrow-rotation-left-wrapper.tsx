import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowRotationLeftIcon as ArrowRotationLeftIconRegular } from './arrow-rotation-left';
import { ArrowRotationLeftIconBold } from './arrow-rotation-left-bold';
import { ArrowRotationLeftIconFilled } from './arrow-rotation-left-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowRotationLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowRotationLeftIcon = memo(forwardRef<SVGSVGElement, ArrowRotationLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowRotationLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowRotationLeftIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowRotationLeftIconRegular ref={ref} {...props} />;
  }
}));

ArrowRotationLeftIcon.displayName = 'ArrowRotationLeftIcon';

export { ArrowRotationLeftIcon };
