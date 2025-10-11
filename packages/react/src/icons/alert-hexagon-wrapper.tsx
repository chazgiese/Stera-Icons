import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AlertHexagonIcon as AlertHexagonIconRegular } from './alert-hexagon';
import { AlertHexagonIconBold } from './alert-hexagon-bold';
import { AlertHexagonIconFilled } from './alert-hexagon-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <AlertHexagonIconRegular ref={ref} {...props} />;
  }
}));

AlertHexagonIcon.displayName = 'AlertHexagonIcon';

export { AlertHexagonIcon };
