import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ScanFaceIcon as ScanFaceIconRegular } from './scan-face';
import { ScanFaceIconBold } from './scan-face-bold';
import { ScanFaceIconFilled } from './scan-face-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ScanFaceIconProps extends IconProps {
  variant?: IconVariant;
}

const ScanFaceIcon = memo(forwardRef<SVGSVGElement, ScanFaceIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ScanFaceIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ScanFaceIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ScanFaceIconRegular ref={ref} {...props} />;
  }
}));

ScanFaceIcon.displayName = 'ScanFaceIcon';

export { ScanFaceIcon };
