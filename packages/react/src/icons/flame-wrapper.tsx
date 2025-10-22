import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { FlameIcon as RegularFlameIcon } from './flame';
import { FlameIconBold } from './flame-bold';
import { FlameIconFilled } from './flame-filled';
import { FlameIconFilltone } from './flame-filltone';
import { FlameIconLinetone } from './flame-linetone';

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
    case 'filltone':
      return <FlameIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <FlameIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularFlameIcon ref={ref} {...props} />;
  }
}));

FlameIcon.displayName = 'FlameIcon';

export { FlameIcon };
