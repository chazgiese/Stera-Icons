import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CloudXIcon as CloudXIconRegular } from './cloud-x';
import { CloudXIconBold } from './cloud-x-bold';
import { CloudXIconFilled } from './cloud-x-filled';
import { CloudXIconFilltone } from './cloud-x-filltone';
import { CloudXIconLinetone } from './cloud-x-linetone';

export interface CloudXIconProps extends IconProps {
  variant?: IconVariant;
}

const CloudXIcon = memo(forwardRef<SVGSVGElement, CloudXIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CloudXIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CloudXIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CloudXIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CloudXIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <CloudXIconRegular ref={ref} {...props} />;
  }
}));

CloudXIcon.displayName = 'CloudXIcon';

export { CloudXIcon };
