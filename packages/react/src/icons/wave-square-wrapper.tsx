import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { WaveSquareIcon as WaveSquareIconRegular } from './wave-square';
import { WaveSquareIconBold } from './wave-square-bold';
import { WaveSquareIconFilled } from './wave-square-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <WaveSquareIconRegular ref={ref} {...props} />;
  }
}));

WaveSquareIcon.displayName = 'WaveSquareIcon';

export { WaveSquareIcon };
