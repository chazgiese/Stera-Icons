import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PawPrintIcon as PawPrintIconRegular } from './paw-print';
import { PawPrintIconBold } from './paw-print-bold';
import { PawPrintIconFilled } from './paw-print-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface PawPrintIconProps extends IconProps {
  variant?: IconVariant;
}

const PawPrintIcon = memo(forwardRef<SVGSVGElement, PawPrintIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PawPrintIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PawPrintIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <PawPrintIconRegular ref={ref} {...props} />;
  }
}));

PawPrintIcon.displayName = 'PawPrintIcon';

export { PawPrintIcon };
