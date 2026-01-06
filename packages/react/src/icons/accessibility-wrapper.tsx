import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AccessibilityIcon as RegularAccessibilityIcon } from './accessibility';
import { AccessibilityIconDuotone as AccessibilityIconDuotone } from './accessibility-duotone';
import { AccessibilityIconBold as AccessibilityIconBold } from './accessibility-bold';
import { AccessibilityIconBoldDuotone as AccessibilityIconBoldDuotone } from './accessibility-bold-duotone';
import { AccessibilityIconFill as AccessibilityIconFill } from './accessibility-fill';
import { AccessibilityIconFillDuotone as AccessibilityIconFillDuotone } from './accessibility-fill-duotone';

export interface AccessibilityIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const AccessibilityIcon = memo(forwardRef<SVGSVGElement, AccessibilityIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <AccessibilityIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <AccessibilityIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <AccessibilityIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <AccessibilityIconFill ref={ref} {...props} />;
  if (duotone) return <AccessibilityIconDuotone ref={ref} {...props} />;
  return <RegularAccessibilityIcon ref={ref} {...props} />;
}));

AccessibilityIcon.displayName = 'AccessibilityIcon';

export { AccessibilityIcon };
