import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowDownLeftIcon as ArrowDownLeftIconRegular } from './arrow-down-left';
import { ArrowDownLeftIconBold } from './arrow-down-left-bold';
import { ArrowDownLeftIconFilled } from './arrow-down-left-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowDownLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowDownLeftIcon = memo(forwardRef<SVGSVGElement, ArrowDownLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowDownLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowDownLeftIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowDownLeftIconRegular ref={ref} {...props} />;
  }
}));

ArrowDownLeftIcon.displayName = 'ArrowDownLeftIcon';

export { ArrowDownLeftIcon };
