import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowRotationRightIcon as ArrowRotationRightIconRegular } from './arrow-rotation-right';
import { ArrowRotationRightIconBold } from './arrow-rotation-right-bold';
import { ArrowRotationRightIconFilled } from './arrow-rotation-right-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowRotationRightIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowRotationRightIcon = memo(forwardRef<SVGSVGElement, ArrowRotationRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowRotationRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowRotationRightIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowRotationRightIconRegular ref={ref} {...props} />;
  }
}));

ArrowRotationRightIcon.displayName = 'ArrowRotationRightIcon';

export { ArrowRotationRightIcon };
