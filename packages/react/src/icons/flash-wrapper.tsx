import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlashIcon as FlashIconRegular } from './flash';
import { FlashIconBold } from './flash-bold';
import { FlashIconFilled } from './flash-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface FlashIconProps extends IconProps {
  variant?: IconVariant;
}

const FlashIcon = memo(forwardRef<SVGSVGElement, FlashIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FlashIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FlashIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <FlashIconRegular ref={ref} {...props} />;
  }
}));

FlashIcon.displayName = 'FlashIcon';

export { FlashIcon };
