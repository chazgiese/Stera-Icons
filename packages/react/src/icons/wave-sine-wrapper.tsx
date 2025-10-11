import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { WaveSineIcon as WaveSineIconRegular } from './wave-sine';
import { WaveSineIconBold } from './wave-sine-bold';
import { WaveSineIconFilled } from './wave-sine-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <WaveSineIconRegular ref={ref} {...props} />;
  }
}));

WaveSineIcon.displayName = 'WaveSineIcon';

export { WaveSineIcon };
