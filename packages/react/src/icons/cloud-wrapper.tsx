import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CloudIcon as CloudIconRegular } from './cloud';
import { CloudIconBold } from './cloud-bold';
import { CloudIconFilled } from './cloud-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface CloudIconProps extends IconProps {
  variant?: IconVariant;
}

const CloudIcon = memo(forwardRef<SVGSVGElement, CloudIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CloudIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CloudIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <CloudIconRegular ref={ref} {...props} />;
  }
}));

CloudIcon.displayName = 'CloudIcon';

export { CloudIcon };
