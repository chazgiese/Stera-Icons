import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { WaveSquareIcon as RegularWaveSquareIcon } from './wave-square';
import { WaveSquareIconBold } from './wave-square-bold';
import { WaveSquareIconFilled } from './wave-square-filled';
import { WaveSquareIconFilltone } from './wave-square-filltone';
import { WaveSquareIconLinetone } from './wave-square-linetone';

export interface WaveSquareIconProps extends IconProps {
  variant?: IconVariant;
}

const WaveSquareIcon = memo(forwardRef<SVGSVGElement, WaveSquareIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <WaveSquareIconFilled ref={ref} {...props} />;
    case 'bold':
      return <WaveSquareIconBold ref={ref} {...props} />;
    case 'filltone':
      return <WaveSquareIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <WaveSquareIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularWaveSquareIcon ref={ref} {...props} />;
  }
}));

WaveSquareIcon.displayName = 'WaveSquareIcon';

export { WaveSquareIcon };
