import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AccessibilityRegular } from './AccessibilityRegular';
import { AccessibilityRegularDuotone } from './AccessibilityRegularDuotone';
import { AccessibilityBold } from './AccessibilityBold';
import { AccessibilityBoldDuotone } from './AccessibilityBoldDuotone';
import { AccessibilityFill } from './AccessibilityFill';
import { AccessibilityFillDuotone } from './AccessibilityFillDuotone';

export interface AccessibilityProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Accessibility - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AccessibilityRegular } from 'stera-icons/icons/AccessibilityRegular';
 */
const Accessibility = memo(forwardRef<SVGSVGElement, AccessibilityProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <AccessibilityBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AccessibilityBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AccessibilityFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AccessibilityFill ref={ref} {...rest} />;
  if (duotone) return <AccessibilityRegularDuotone ref={ref} {...rest} />;
  return <AccessibilityRegular ref={ref} {...rest} />;
}));

Accessibility.displayName = 'Accessibility';

// Triple export pattern (lucide-react style)
export { Accessibility, Accessibility as AccessibilityIcon, Accessibility as SiAccessibility };
