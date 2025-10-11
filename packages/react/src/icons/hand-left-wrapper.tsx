import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HandLeftIcon as HandLeftIconRegular } from './hand-left';
import { HandLeftIconBold } from './hand-left-bold';
import { HandLeftIconFilled } from './hand-left-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface HandLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const HandLeftIcon = memo(forwardRef<SVGSVGElement, HandLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <HandLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <HandLeftIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <HandLeftIconRegular ref={ref} {...props} />;
  }
}));

HandLeftIcon.displayName = 'HandLeftIcon';

export { HandLeftIcon };
