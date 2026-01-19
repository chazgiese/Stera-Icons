import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SquarePlaceholderRegular } from './SquarePlaceholderRegular';
import { SquarePlaceholderRegularDuotone } from './SquarePlaceholderRegularDuotone';
import { SquarePlaceholderBold } from './SquarePlaceholderBold';
import { SquarePlaceholderBoldDuotone } from './SquarePlaceholderBoldDuotone';
import { SquarePlaceholderFill } from './SquarePlaceholderFill';
import { SquarePlaceholderFillDuotone } from './SquarePlaceholderFillDuotone';

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
