import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { AccessibilityRegular } from './AccessibilityRegular.js';
import { AccessibilityRegularDuotone } from './AccessibilityRegularDuotone.js';
import { AccessibilityBold } from './AccessibilityBold.js';
import { AccessibilityBoldDuotone } from './AccessibilityBoldDuotone.js';
import { AccessibilityFill } from './AccessibilityFill.js';
import { AccessibilityFillDuotone } from './AccessibilityFillDuotone.js';

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
export default Accessibility;
