import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowRotateRightIcon as ArrowRotateRightIconRegular } from './arrow-rotate-right';
import { ArrowRotateRightIconBold } from './arrow-rotate-right-bold';
import { ArrowRotateRightIconFilled } from './arrow-rotate-right-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowRotateRightIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowRotateRightIcon = memo(forwardRef<SVGSVGElement, ArrowRotateRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowRotateRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowRotateRightIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowRotateRightIconRegular ref={ref} {...props} />;
  }
}));

ArrowRotateRightIcon.displayName = 'ArrowRotateRightIcon';

export { ArrowRotateRightIcon };
