import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowBigRightIcon as ArrowBigRightIconRegular } from './arrow-big-right';
import { ArrowBigRightIconBold } from './arrow-big-right-bold';
import { ArrowBigRightIconFilled } from './arrow-big-right-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowBigRightIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowBigRightIcon = memo(forwardRef<SVGSVGElement, ArrowBigRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowBigRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowBigRightIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowBigRightIconRegular ref={ref} {...props} />;
  }
}));

ArrowBigRightIcon.displayName = 'ArrowBigRightIcon';

export { ArrowBigRightIcon };
