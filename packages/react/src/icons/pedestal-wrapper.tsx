import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PedestalIcon as PedestalIconRegular } from './pedestal';
import { PedestalIconBold } from './pedestal-bold';
import { PedestalIconFilled } from './pedestal-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface PedestalIconProps extends IconProps {
  variant?: IconVariant;
}

const PedestalIcon = memo(forwardRef<SVGSVGElement, PedestalIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PedestalIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PedestalIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <PedestalIconRegular ref={ref} {...props} />;
  }
}));

PedestalIcon.displayName = 'PedestalIcon';

export { PedestalIcon };
