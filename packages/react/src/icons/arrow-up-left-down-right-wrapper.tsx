import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowUpLeftDownRightIcon as ArrowUpLeftDownRightIconRegular } from './arrow-up-left-down-right';
import { ArrowUpLeftDownRightIconBold } from './arrow-up-left-down-right-bold';
import { ArrowUpLeftDownRightIconFilled } from './arrow-up-left-down-right-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowUpLeftDownRightIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowUpLeftDownRightIcon = memo(forwardRef<SVGSVGElement, ArrowUpLeftDownRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowUpLeftDownRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowUpLeftDownRightIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowUpLeftDownRightIconRegular ref={ref} {...props} />;
  }
}));

ArrowUpLeftDownRightIcon.displayName = 'ArrowUpLeftDownRightIcon';

export { ArrowUpLeftDownRightIcon };
