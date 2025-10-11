import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowBigDownIcon as ArrowBigDownIconRegular } from './arrow-big-down';
import { ArrowBigDownIconBold } from './arrow-big-down-bold';
import { ArrowBigDownIconFilled } from './arrow-big-down-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowBigDownIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowBigDownIcon = memo(forwardRef<SVGSVGElement, ArrowBigDownIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowBigDownIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowBigDownIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowBigDownIconRegular ref={ref} {...props} />;
  }
}));

ArrowBigDownIcon.displayName = 'ArrowBigDownIcon';

export { ArrowBigDownIcon };
