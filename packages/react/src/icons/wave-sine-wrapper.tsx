import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { WaveSineIcon as RegularWaveSineIcon } from './wave-sine';
import { WaveSineIconBold } from './wave-sine-bold';
import { WaveSineIconFilled } from './wave-sine-filled';
import { WaveSineIconFilltone } from './wave-sine-filltone';
import { WaveSineIconLinetone } from './wave-sine-linetone';

export interface WaveSineIconProps extends IconProps {
  variant?: IconVariant;
}

const WaveSineIcon = memo(forwardRef<SVGSVGElement, WaveSineIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <WaveSineIconFilled ref={ref} {...props} />;
    case 'bold':
      return <WaveSineIconBold ref={ref} {...props} />;
    case 'filltone':
      return <WaveSineIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <WaveSineIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularWaveSineIcon ref={ref} {...props} />;
  }
}));

WaveSineIcon.displayName = 'WaveSineIcon';

export { WaveSineIcon };
