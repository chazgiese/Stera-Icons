import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CylinderIcon as CylinderIconRegular } from './cylinder';
import { CylinderIconBold } from './cylinder-bold';
import { CylinderIconFilled } from './cylinder-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <CylinderIconRegular ref={ref} {...props} />;
  }
}));

CylinderIcon.displayName = 'CylinderIcon';

export { CylinderIcon };
