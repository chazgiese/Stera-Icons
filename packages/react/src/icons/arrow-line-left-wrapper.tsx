import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowLineLeftIcon as ArrowLineLeftIconRegular } from './arrow-line-left';
import { ArrowLineLeftIconBold } from './arrow-line-left-bold';
import { ArrowLineLeftIconFilled } from './arrow-line-left-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowLineLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowLineLeftIcon = memo(forwardRef<SVGSVGElement, ArrowLineLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowLineLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowLineLeftIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowLineLeftIconRegular ref={ref} {...props} />;
  }
}));

ArrowLineLeftIcon.displayName = 'ArrowLineLeftIcon';

export { ArrowLineLeftIcon };
