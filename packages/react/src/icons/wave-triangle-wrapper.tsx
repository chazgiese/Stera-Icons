import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { WaveTriangleIcon as WaveTriangleIconRegular } from './wave-triangle';
import { WaveTriangleIconBold } from './wave-triangle-bold';
import { WaveTriangleIconFilled } from './wave-triangle-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <WaveTriangleIconRegular ref={ref} {...props} />;
  }
}));

WaveTriangleIcon.displayName = 'WaveTriangleIcon';

export { WaveTriangleIcon };
