import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { WandIcon as WandIconRegular } from './wand';
import { WandIconBold } from './wand-bold';
import { WandIconFilled } from './wand-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <WandIconRegular ref={ref} {...props} />;
  }
}));

WandIcon.displayName = 'WandIcon';

export { WandIcon };
