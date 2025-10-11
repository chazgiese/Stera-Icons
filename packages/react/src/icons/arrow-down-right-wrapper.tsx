import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowDownRightIcon as ArrowDownRightIconRegular } from './arrow-down-right';
import { ArrowDownRightIconBold } from './arrow-down-right-bold';
import { ArrowDownRightIconFilled } from './arrow-down-right-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowDownRightIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowDownRightIcon = memo(forwardRef<SVGSVGElement, ArrowDownRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowDownRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowDownRightIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowDownRightIconRegular ref={ref} {...props} />;
  }
}));

ArrowDownRightIcon.displayName = 'ArrowDownRightIcon';

export { ArrowDownRightIcon };
