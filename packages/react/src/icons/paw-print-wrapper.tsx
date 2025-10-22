import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { PawPrintIcon as PawPrintIconRegular } from './paw-print';
import { PawPrintIconBold } from './paw-print-bold';
import { PawPrintIconFilled } from './paw-print-filled';
import { PawPrintIconFilltone } from './paw-print-filltone';
import { PawPrintIconLinetone } from './paw-print-linetone';

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
    case 'filltone':
      return <PawPrintIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <PawPrintIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <PawPrintIconRegular ref={ref} {...props} />;
  }
}));

PawPrintIcon.displayName = 'PawPrintIcon';

export { PawPrintIcon };
