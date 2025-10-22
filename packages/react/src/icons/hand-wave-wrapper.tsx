import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { HandWaveIcon as HandWaveIconRegular } from './hand-wave';
import { HandWaveIconBold } from './hand-wave-bold';
import { HandWaveIconFilled } from './hand-wave-filled';
import { HandWaveIconFilltone } from './hand-wave-filltone';
import { HandWaveIconLinetone } from './hand-wave-linetone';

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
    case 'filltone':
      return <HandWaveIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <HandWaveIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <HandWaveIconRegular ref={ref} {...props} />;
  }
}));

HandWaveIcon.displayName = 'HandWaveIcon';

export { HandWaveIcon };
