import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HandWaveIcon as HandWaveIconRegular } from './hand-wave';
import { HandWaveIconBold } from './hand-wave-bold';
import { HandWaveIconFilled } from './hand-wave-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface HandWaveIconProps extends IconProps {
  variant?: IconVariant;
}

const HandWaveIcon = memo(forwardRef<SVGSVGElement, HandWaveIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <HandWaveIconFilled ref={ref} {...props} />;
    case 'bold':
      return <HandWaveIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <HandWaveIconRegular ref={ref} {...props} />;
  }
}));

HandWaveIcon.displayName = 'HandWaveIcon';

export { HandWaveIcon };
