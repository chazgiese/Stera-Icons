import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlameIcon as FlameIconRegular } from './flame';
import { FlameIconBold } from './flame-bold';
import { FlameIconFilled } from './flame-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface FlameIconProps extends IconProps {
  variant?: IconVariant;
}

const FlameIcon = memo(forwardRef<SVGSVGElement, FlameIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <FlameIconFilled ref={ref} {...props} />;
    case 'bold':
      return <FlameIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <FlameIconRegular ref={ref} {...props} />;
  }
}));

FlameIcon.displayName = 'FlameIcon';

export { FlameIcon };
