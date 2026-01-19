import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CirclePlaceholderRegular } from './CirclePlaceholderRegular';
import { CirclePlaceholderRegularDuotone } from './CirclePlaceholderRegularDuotone';
import { CirclePlaceholderBold } from './CirclePlaceholderBold';
import { CirclePlaceholderBoldDuotone } from './CirclePlaceholderBoldDuotone';
import { CirclePlaceholderFill } from './CirclePlaceholderFill';
import { CirclePlaceholderFillDuotone } from './CirclePlaceholderFillDuotone';

export interface CirclePlaceholderProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CirclePlaceholder - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CirclePlaceholderRegular } from 'stera-icons/icons/CirclePlaceholderRegular';
 */
const CirclePlaceholder = memo(forwardRef<SVGSVGElement, CirclePlaceholderProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CirclePlaceholderBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CirclePlaceholderBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CirclePlaceholderFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CirclePlaceholderFill ref={ref} {...rest} />;
  if (duotone) return <CirclePlaceholderRegularDuotone ref={ref} {...rest} />;
  return <CirclePlaceholderRegular ref={ref} {...rest} />;
}));

CirclePlaceholder.displayName = 'CirclePlaceholder';

// Triple export pattern (lucide-react style)
export { CirclePlaceholder, CirclePlaceholder as CirclePlaceholderIcon, CirclePlaceholder as SiCirclePlaceholder };
export default CirclePlaceholder;
