import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { InfoCircleIcon as InfoCircleIconRegular } from './info-circle';
import { InfoCircleIconBold } from './info-circle-bold';
import { InfoCircleIconFilled } from './info-circle-filled';
import { InfoCircleIconFilltone } from './info-circle-filltone';
import { InfoCircleIconLinetone } from './info-circle-linetone';

export interface InfoCircleIconProps extends IconProps {
  variant?: IconVariant;
}

const InfoCircleIcon = memo(forwardRef<SVGSVGElement, InfoCircleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <InfoCircleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <InfoCircleIconBold ref={ref} {...props} />;
    case 'filltone':
      return <InfoCircleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <InfoCircleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <InfoCircleIconRegular ref={ref} {...props} />;
  }
}));

InfoCircleIcon.displayName = 'InfoCircleIcon';

export { InfoCircleIcon };
