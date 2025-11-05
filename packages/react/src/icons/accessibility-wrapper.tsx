import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { AccessibilityIcon as RegularAccessibilityIcon } from './accessibility';
import { AccessibilityIconBold } from './accessibility-bold';
import { AccessibilityIconFilled } from './accessibility-filled';
import { AccessibilityIconFilltone } from './accessibility-filltone';
import { AccessibilityIconLinetone } from './accessibility-linetone';

export interface AccessibilityIconProps extends IconProps {
  variant?: IconVariant;
}

const AccessibilityIcon = memo(forwardRef<SVGSVGElement, AccessibilityIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <AccessibilityIconFilled ref={ref} {...props} />;
    case 'bold':
      return <AccessibilityIconBold ref={ref} {...props} />;
    case 'filltone':
      return <AccessibilityIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <AccessibilityIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularAccessibilityIcon ref={ref} {...props} />;
  }
}));

AccessibilityIcon.displayName = 'AccessibilityIcon';

export { AccessibilityIcon };
