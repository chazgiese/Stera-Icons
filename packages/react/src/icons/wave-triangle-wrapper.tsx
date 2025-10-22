import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { WaveTriangleIcon as WaveTriangleIconRegular } from './wave-triangle';
import { WaveTriangleIconBold } from './wave-triangle-bold';
import { WaveTriangleIconFilled } from './wave-triangle-filled';
import { WaveTriangleIconFilltone } from './wave-triangle-filltone';
import { WaveTriangleIconLinetone } from './wave-triangle-linetone';

export interface WaveTriangleIconProps extends IconProps {
  variant?: IconVariant;
}

const WaveTriangleIcon = memo(forwardRef<SVGSVGElement, WaveTriangleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <WaveTriangleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <WaveTriangleIconBold ref={ref} {...props} />;
    case 'filltone':
      return <WaveTriangleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <WaveTriangleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <WaveTriangleIconRegular ref={ref} {...props} />;
  }
}));

WaveTriangleIcon.displayName = 'WaveTriangleIcon';

export { WaveTriangleIcon };
