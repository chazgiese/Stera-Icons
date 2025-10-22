import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CupIcon as CupIconRegular } from './cup';
import { CupIconBold } from './cup-bold';
import { CupIconFilled } from './cup-filled';
import { CupIconFilltone } from './cup-filltone';
import { CupIconLinetone } from './cup-linetone';

export interface CupIconProps extends IconProps {
  variant?: IconVariant;
}

const CupIcon = memo(forwardRef<SVGSVGElement, CupIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CupIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CupIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CupIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CupIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <CupIconRegular ref={ref} {...props} />;
  }
}));

CupIcon.displayName = 'CupIcon';

export { CupIcon };
