import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CopyIcon as CopyIconRegular } from './copy';
import { CopyIconBold } from './copy-bold';
import { CopyIconFilled } from './copy-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface CopyIconProps extends IconProps {
  variant?: IconVariant;
}

const CopyIcon = memo(forwardRef<SVGSVGElement, CopyIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CopyIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CopyIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <CopyIconRegular ref={ref} {...props} />;
  }
}));

CopyIcon.displayName = 'CopyIcon';

export { CopyIcon };
