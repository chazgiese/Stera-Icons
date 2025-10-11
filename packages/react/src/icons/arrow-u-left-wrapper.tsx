import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowULeftIcon as ArrowULeftIconRegular } from './arrow-u-left';
import { ArrowULeftIconBold } from './arrow-u-left-bold';
import { ArrowULeftIconFilled } from './arrow-u-left-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowULeftIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowULeftIcon = memo(forwardRef<SVGSVGElement, ArrowULeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowULeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowULeftIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowULeftIconRegular ref={ref} {...props} />;
  }
}));

ArrowULeftIcon.displayName = 'ArrowULeftIcon';

export { ArrowULeftIcon };
