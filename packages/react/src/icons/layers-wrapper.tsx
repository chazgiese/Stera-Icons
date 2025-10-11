import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LayersIcon as LayersIconRegular } from './layers';
import { LayersIconBold } from './layers-bold';
import { LayersIconFilled } from './layers-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface LayersIconProps extends IconProps {
  variant?: IconVariant;
}

const LayersIcon = memo(forwardRef<SVGSVGElement, LayersIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <LayersIconFilled ref={ref} {...props} />;
    case 'bold':
      return <LayersIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <LayersIconRegular ref={ref} {...props} />;
  }
}));

LayersIcon.displayName = 'LayersIcon';

export { LayersIcon };
