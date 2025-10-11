import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowULeftTopIcon as ArrowULeftTopIconRegular } from './arrow-u-left-top';
import { ArrowULeftTopIconBold } from './arrow-u-left-top-bold';
import { ArrowULeftTopIconFilled } from './arrow-u-left-top-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowULeftTopIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowULeftTopIcon = memo(forwardRef<SVGSVGElement, ArrowULeftTopIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowULeftTopIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowULeftTopIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowULeftTopIconRegular ref={ref} {...props} />;
  }
}));

ArrowULeftTopIcon.displayName = 'ArrowULeftTopIcon';

export { ArrowULeftTopIcon };
