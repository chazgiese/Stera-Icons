import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { AlertHexagonIcon as AlertHexagonIconRegular } from './alert-hexagon';
import { AlertHexagonIconBold } from './alert-hexagon-bold';
import { AlertHexagonIconFilled } from './alert-hexagon-filled';
import { AlertHexagonIconFilltone } from './alert-hexagon-filltone';
import { AlertHexagonIconLinetone } from './alert-hexagon-linetone';

export interface AlertHexagonIconProps extends IconProps {
  variant?: IconVariant;
}

const AlertHexagonIcon = memo(forwardRef<SVGSVGElement, AlertHexagonIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <AlertHexagonIconFilled ref={ref} {...props} />;
    case 'bold':
      return <AlertHexagonIconBold ref={ref} {...props} />;
    case 'filltone':
      return <AlertHexagonIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <AlertHexagonIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <AlertHexagonIconRegular ref={ref} {...props} />;
  }
}));

AlertHexagonIcon.displayName = 'AlertHexagonIcon';

export { AlertHexagonIcon };
