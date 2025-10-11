import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AstriskIcon as AstriskIconRegular } from './astrisk';
import { AstriskIconBold } from './astrisk-bold';
import { AstriskIconFilled } from './astrisk-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface AstriskIconProps extends IconProps {
  variant?: IconVariant;
}

const AstriskIcon = memo(forwardRef<SVGSVGElement, AstriskIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <AstriskIconFilled ref={ref} {...props} />;
    case 'bold':
      return <AstriskIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <AstriskIconRegular ref={ref} {...props} />;
  }
}));

AstriskIcon.displayName = 'AstriskIcon';

export { AstriskIcon };
