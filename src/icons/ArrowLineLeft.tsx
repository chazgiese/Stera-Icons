import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowLineLeftRegular } from './ArrowLineLeftRegular';
import { ArrowLineLeftRegularDuotone } from './ArrowLineLeftRegularDuotone';
import { ArrowLineLeftBold } from './ArrowLineLeftBold';
import { ArrowLineLeftBoldDuotone } from './ArrowLineLeftBoldDuotone';
import { ArrowLineLeftFill } from './ArrowLineLeftFill';
import { ArrowLineLeftFillDuotone } from './ArrowLineLeftFillDuotone';

export interface ArrowLineLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowLineLeft - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowLineLeftRegular } from 'stera-icons/icons/ArrowLineLeftRegular';
 */
const ArrowLineLeft = memo(forwardRef<SVGSVGElement, ArrowLineLeftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowLineLeftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowLineLeftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowLineLeftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowLineLeftFill ref={ref} {...rest} />;
  if (duotone) return <ArrowLineLeftRegularDuotone ref={ref} {...rest} />;
  return <ArrowLineLeftRegular ref={ref} {...rest} />;
}));

ArrowLineLeft.displayName = 'ArrowLineLeft';

// Triple export pattern (lucide-react style)
export { ArrowLineLeft, ArrowLineLeft as ArrowLineLeftIcon, ArrowLineLeft as SiArrowLineLeft };
