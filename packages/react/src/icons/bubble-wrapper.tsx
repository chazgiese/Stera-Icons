import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BubbleIcon as BubbleIconRegular } from './bubble';
import { BubbleIconBold } from './bubble-bold';
import { BubbleIconFilled } from './bubble-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface BubbleIconProps extends IconProps {
  variant?: IconVariant;
}

const BubbleIcon = memo(forwardRef<SVGSVGElement, BubbleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BubbleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BubbleIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <BubbleIconRegular ref={ref} {...props} />;
  }
}));

BubbleIcon.displayName = 'BubbleIcon';

export { BubbleIcon };
