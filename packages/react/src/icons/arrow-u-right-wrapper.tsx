import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowURightIcon as ArrowURightIconRegular } from './arrow-u-right';
import { ArrowURightIconBold } from './arrow-u-right-bold';
import { ArrowURightIconFilled } from './arrow-u-right-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowURightIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowURightIcon = memo(forwardRef<SVGSVGElement, ArrowURightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowURightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowURightIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowURightIconRegular ref={ref} {...props} />;
  }
}));

ArrowURightIcon.displayName = 'ArrowURightIcon';

export { ArrowURightIcon };
