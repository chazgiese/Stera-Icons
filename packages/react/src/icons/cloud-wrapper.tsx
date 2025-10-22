import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CloudIcon as RegularCloudIcon } from './cloud';
import { CloudIconBold } from './cloud-bold';
import { CloudIconFilled } from './cloud-filled';
import { CloudIconFilltone } from './cloud-filltone';
import { CloudIconLinetone } from './cloud-linetone';

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
    case 'filltone':
      return <CloudIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CloudIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularCloudIcon ref={ref} {...props} />;
  }
}));

CloudIcon.displayName = 'CloudIcon';

export { CloudIcon };
