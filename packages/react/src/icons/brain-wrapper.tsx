import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { BrainIcon as RegularBrainIcon } from './brain';
import { BrainIconBold } from './brain-bold';
import { BrainIconFilled } from './brain-filled';
import { BrainIconFilltone } from './brain-filltone';
import { BrainIconLinetone } from './brain-linetone';

export interface BrainIconProps extends IconProps {
  variant?: IconVariant;
}

const BrainIcon = memo(forwardRef<SVGSVGElement, BrainIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BrainIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BrainIconBold ref={ref} {...props} />;
    case 'filltone':
      return <BrainIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <BrainIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularBrainIcon ref={ref} {...props} />;
  }
}));

BrainIcon.displayName = 'BrainIcon';

export { BrainIcon };
