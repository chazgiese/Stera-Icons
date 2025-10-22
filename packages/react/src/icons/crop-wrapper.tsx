import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CropIcon as CropIconRegular } from './crop';
import { CropIconBold } from './crop-bold';
import { CropIconFilled } from './crop-filled';
import { CropIconFilltone } from './crop-filltone';
import { CropIconLinetone } from './crop-linetone';

export interface CropIconProps extends IconProps {
  variant?: IconVariant;
}

const CropIcon = memo(forwardRef<SVGSVGElement, CropIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CropIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CropIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CropIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CropIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <CropIconRegular ref={ref} {...props} />;
  }
}));

CropIcon.displayName = 'CropIcon';

export { CropIcon };
