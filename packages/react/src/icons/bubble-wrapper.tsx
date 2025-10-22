import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BubbleIcon as RegularBubbleIcon } from './bubble';
import { BubbleIconBold } from './bubble-bold';
import { BubbleIconFilled } from './bubble-filled';
import { BubbleIconFilltone } from './bubble-filltone';
import { BubbleIconLinetone } from './bubble-linetone';

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
    case 'filltone':
      return <BubbleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BubbleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularBubbleIcon ref={ref} {...props} />;
  }
}));

BubbleIcon.displayName = 'BubbleIcon';

export { BubbleIcon };
