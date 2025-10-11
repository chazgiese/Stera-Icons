import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowUpLeftIcon as ArrowUpLeftIconRegular } from './arrow-up-left';
import { ArrowUpLeftIconBold } from './arrow-up-left-bold';
import { ArrowUpLeftIconFilled } from './arrow-up-left-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowUpLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowUpLeftIcon = memo(forwardRef<SVGSVGElement, ArrowUpLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowUpLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowUpLeftIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowUpLeftIconRegular ref={ref} {...props} />;
  }
}));

ArrowUpLeftIcon.displayName = 'ArrowUpLeftIcon';

export { ArrowUpLeftIcon };
