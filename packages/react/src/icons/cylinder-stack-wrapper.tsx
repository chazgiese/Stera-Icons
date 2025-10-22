import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CylinderStackIcon as RegularCylinderStackIcon } from './cylinder-stack';
import { CylinderStackIconBold } from './cylinder-stack-bold';
import { CylinderStackIconFilled } from './cylinder-stack-filled';
import { CylinderStackIconFilltone } from './cylinder-stack-filltone';
import { CylinderStackIconLinetone } from './cylinder-stack-linetone';

export interface CylinderStackIconProps extends IconProps {
  variant?: IconVariant;
}

const CylinderStackIcon = memo(forwardRef<SVGSVGElement, CylinderStackIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CylinderStackIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CylinderStackIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CylinderStackIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CylinderStackIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularCylinderStackIcon ref={ref} {...props} />;
  }
}));

CylinderStackIcon.displayName = 'CylinderStackIcon';

export { CylinderStackIcon };
