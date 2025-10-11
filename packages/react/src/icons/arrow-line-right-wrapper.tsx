import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowLineRightIcon as ArrowLineRightIconRegular } from './arrow-line-right';
import { ArrowLineRightIconBold } from './arrow-line-right-bold';
import { ArrowLineRightIconFilled } from './arrow-line-right-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowLineRightIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowLineRightIcon = memo(forwardRef<SVGSVGElement, ArrowLineRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowLineRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowLineRightIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowLineRightIconRegular ref={ref} {...props} />;
  }
}));

ArrowLineRightIcon.displayName = 'ArrowLineRightIcon';

export { ArrowLineRightIcon };
