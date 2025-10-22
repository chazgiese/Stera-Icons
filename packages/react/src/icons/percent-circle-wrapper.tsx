import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { PercentCircleIcon as RegularPercentCircleIcon } from './percent-circle';
import { PercentCircleIconBold } from './percent-circle-bold';
import { PercentCircleIconFilled } from './percent-circle-filled';
import { PercentCircleIconFilltone } from './percent-circle-filltone';
import { PercentCircleIconLinetone } from './percent-circle-linetone';

export interface PercentCircleIconProps extends IconProps {
  variant?: IconVariant;
}

const PercentCircleIcon = memo(forwardRef<SVGSVGElement, PercentCircleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PercentCircleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PercentCircleIconBold ref={ref} {...props} />;
    case 'filltone':
      return <PercentCircleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <PercentCircleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularPercentCircleIcon ref={ref} {...props} />;
  }
}));

PercentCircleIcon.displayName = 'PercentCircleIcon';

export { PercentCircleIcon };
