import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowLeftRightIcon as ArrowLeftRightIconRegular } from './arrow-left-right';
import { ArrowLeftRightIconBold } from './arrow-left-right-bold';
import { ArrowLeftRightIconFilled } from './arrow-left-right-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowLeftRightIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowLeftRightIcon = memo(forwardRef<SVGSVGElement, ArrowLeftRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowLeftRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowLeftRightIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowLeftRightIconRegular ref={ref} {...props} />;
  }
}));

ArrowLeftRightIcon.displayName = 'ArrowLeftRightIcon';

export { ArrowLeftRightIcon };
