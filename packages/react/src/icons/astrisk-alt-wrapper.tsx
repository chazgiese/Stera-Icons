import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AstriskAltIcon as AstriskAltIconRegular } from './astrisk-alt';
import { AstriskAltIconBold } from './astrisk-alt-bold';
import { AstriskAltIconFilled } from './astrisk-alt-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface AstriskAltIconProps extends IconProps {
  variant?: IconVariant;
}

const AstriskAltIcon = memo(forwardRef<SVGSVGElement, AstriskAltIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <AstriskAltIconFilled ref={ref} {...props} />;
    case 'bold':
      return <AstriskAltIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <AstriskAltIconRegular ref={ref} {...props} />;
  }
}));

AstriskAltIcon.displayName = 'AstriskAltIcon';

export { AstriskAltIcon };
