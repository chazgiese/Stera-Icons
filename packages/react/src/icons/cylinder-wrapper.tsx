import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CylinderIcon as CylinderIconRegular } from './cylinder';
import { CylinderIconBold } from './cylinder-bold';
import { CylinderIconFilled } from './cylinder-filled';
import { CylinderIconFilltone } from './cylinder-filltone';
import { CylinderIconLinetone } from './cylinder-linetone';

export interface CylinderIconProps extends IconProps {
  variant?: IconVariant;
}

const CylinderIcon = memo(forwardRef<SVGSVGElement, CylinderIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CylinderIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CylinderIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CylinderIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CylinderIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <CylinderIconRegular ref={ref} {...props} />;
  }
}));

CylinderIcon.displayName = 'CylinderIcon';

export { CylinderIcon };
