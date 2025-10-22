import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { WandIcon as RegularWandIcon } from './wand';
import { WandIconBold } from './wand-bold';
import { WandIconFilled } from './wand-filled';
import { WandIconFilltone } from './wand-filltone';
import { WandIconLinetone } from './wand-linetone';

export interface WandIconProps extends IconProps {
  variant?: IconVariant;
}

const WandIcon = memo(forwardRef<SVGSVGElement, WandIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <WandIconFilled ref={ref} {...props} />;
    case 'bold':
      return <WandIconBold ref={ref} {...props} />;
    case 'filltone':
      return <WandIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <WandIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularWandIcon ref={ref} {...props} />;
  }
}));

WandIcon.displayName = 'WandIcon';

export { WandIcon };
