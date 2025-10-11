import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowLineUpIcon as ArrowLineUpIconRegular } from './arrow-line-up';
import { ArrowLineUpIconBold } from './arrow-line-up-bold';
import { ArrowLineUpIconFilled } from './arrow-line-up-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowLineUpIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowLineUpIcon = memo(forwardRef<SVGSVGElement, ArrowLineUpIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowLineUpIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowLineUpIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowLineUpIconRegular ref={ref} {...props} />;
  }
}));

ArrowLineUpIcon.displayName = 'ArrowLineUpIcon';

export { ArrowLineUpIcon };
