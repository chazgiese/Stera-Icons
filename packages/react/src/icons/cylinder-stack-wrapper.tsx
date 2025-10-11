import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CylinderStackIcon as CylinderStackIconRegular } from './cylinder-stack';
import { CylinderStackIconBold } from './cylinder-stack-bold';
import { CylinderStackIconFilled } from './cylinder-stack-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <CylinderStackIconRegular ref={ref} {...props} />;
  }
}));

CylinderStackIcon.displayName = 'CylinderStackIcon';

export { CylinderStackIcon };
