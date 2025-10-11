import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowBigLeftIcon as ArrowBigLeftIconRegular } from './arrow-big-left';
import { ArrowBigLeftIconBold } from './arrow-big-left-bold';
import { ArrowBigLeftIconFilled } from './arrow-big-left-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ArrowBigLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const ArrowBigLeftIcon = memo(forwardRef<SVGSVGElement, ArrowBigLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ArrowBigLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ArrowBigLeftIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ArrowBigLeftIconRegular ref={ref} {...props} />;
  }
}));

ArrowBigLeftIcon.displayName = 'ArrowBigLeftIcon';

export { ArrowBigLeftIcon };
