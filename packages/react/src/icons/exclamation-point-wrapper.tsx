import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ExclamationPointIcon as ExclamationPointIconRegular } from './exclamation-point';
import { ExclamationPointIconBold } from './exclamation-point-bold';
import { ExclamationPointIconFilled } from './exclamation-point-filled';
import { ExclamationPointIconFilltone } from './exclamation-point-filltone';
import { ExclamationPointIconLinetone } from './exclamation-point-linetone';

export interface ExclamationPointIconProps extends IconProps {
  variant?: IconVariant;
}

const ExclamationPointIcon = memo(forwardRef<SVGSVGElement, ExclamationPointIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ExclamationPointIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ExclamationPointIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ExclamationPointIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ExclamationPointIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ExclamationPointIconRegular ref={ref} {...props} />;
  }
}));

ExclamationPointIcon.displayName = 'ExclamationPointIcon';

export { ExclamationPointIcon };
