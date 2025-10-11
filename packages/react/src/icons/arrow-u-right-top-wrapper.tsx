import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowURightTopIcon as ArrowURightTopIconRegular } from './arrow-u-right-top';
import { ArrowURightTopIconBold } from './arrow-u-right-top-bold';
import { ArrowURightTopIconFilled } from './arrow-u-right-top-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowURightTopIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowURightTopIcon = memo(forwardRef<SVGSVGElement, ArrowURightTopIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowURightTopIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowURightTopIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowURightTopIconRegular ref={ref} {...props} />;
  }
}));

ArrowURightTopIcon.displayName = 'ArrowURightTopIcon';

export { ArrowURightTopIcon };
