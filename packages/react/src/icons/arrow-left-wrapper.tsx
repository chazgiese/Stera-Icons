import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowLeftIcon as ArrowLeftIconRegular } from './arrow-left';
import { ArrowLeftIconBold } from './arrow-left-bold';
import { ArrowLeftIconFilled } from './arrow-left-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowLeftIcon = memo(forwardRef<SVGSVGElement, ArrowLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowLeftIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowLeftIconRegular ref={ref} {...props} />;
  }
}));

ArrowLeftIcon.displayName = 'ArrowLeftIcon';

export { ArrowLeftIcon };
