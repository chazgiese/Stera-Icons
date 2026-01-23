import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SquarePlaceholderRegular } from './SquarePlaceholderRegular.js';
import { SquarePlaceholderRegularDuotone } from './SquarePlaceholderRegularDuotone.js';
import { SquarePlaceholderBold } from './SquarePlaceholderBold.js';
import { SquarePlaceholderBoldDuotone } from './SquarePlaceholderBoldDuotone.js';
import { SquarePlaceholderFill } from './SquarePlaceholderFill.js';
import { SquarePlaceholderFillDuotone } from './SquarePlaceholderFillDuotone.js';

export interface SquarePlaceholderProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SquarePlaceholder - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SquarePlaceholderRegular } from 'stera-icons/icons/SquarePlaceholderRegular';
 */
const SquarePlaceholder = memo(forwardRef<SVGSVGElement, SquarePlaceholderProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SquarePlaceholderBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SquarePlaceholderBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SquarePlaceholderFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SquarePlaceholderFill ref={ref} {...rest} />;
  if (duotone) return <SquarePlaceholderRegularDuotone ref={ref} {...rest} />;
  return <SquarePlaceholderRegular ref={ref} {...rest} />;
}));

SquarePlaceholder.displayName = 'SquarePlaceholder';

// Triple export pattern (lucide-react style)
export { SquarePlaceholder, SquarePlaceholder as SquarePlaceholderIcon, SquarePlaceholder as SiSquarePlaceholder };
export default SquarePlaceholder;
