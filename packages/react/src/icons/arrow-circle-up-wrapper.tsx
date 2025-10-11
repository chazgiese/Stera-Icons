import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowCircleUpIcon as ArrowCircleUpIconRegular } from './arrow-circle-up';
import { ArrowCircleUpIconBold } from './arrow-circle-up-bold';
import { ArrowCircleUpIconFilled } from './arrow-circle-up-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowCircleUpIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowCircleUpIcon = memo(forwardRef<SVGSVGElement, ArrowCircleUpIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowCircleUpIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowCircleUpIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowCircleUpIconRegular ref={ref} {...props} />;
  }
}));

ArrowCircleUpIcon.displayName = 'ArrowCircleUpIcon';

export { ArrowCircleUpIcon };
