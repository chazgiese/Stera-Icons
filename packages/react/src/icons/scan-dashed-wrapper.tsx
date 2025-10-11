import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ScanDashedIcon as ScanDashedIconRegular } from './scan-dashed';
import { ScanDashedIconBold } from './scan-dashed-bold';
import { ScanDashedIconFilled } from './scan-dashed-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface ScanDashedIconProps extends IconProps {
  variant?: IconVariant;
}

const ScanDashedIcon = memo(forwardRef<SVGSVGElement, ScanDashedIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ScanDashedIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ScanDashedIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <ScanDashedIconRegular ref={ref} {...props} />;
  }
}));

ScanDashedIcon.displayName = 'ScanDashedIcon';

export { ScanDashedIcon };
