import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowDownLeftRegular } from './ArrowDownLeftRegular';
import { ArrowDownLeftRegularDuotone } from './ArrowDownLeftRegularDuotone';
import { ArrowDownLeftBold } from './ArrowDownLeftBold';
import { ArrowDownLeftBoldDuotone } from './ArrowDownLeftBoldDuotone';
import { ArrowDownLeftFill } from './ArrowDownLeftFill';
import { ArrowDownLeftFillDuotone } from './ArrowDownLeftFillDuotone';

export interface ArrowDownLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowDownLeft - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowDownLeftRegular } from 'stera-icons/icons/ArrowDownLeftRegular';
 */
const ArrowDownLeft = memo(forwardRef<SVGSVGElement, ArrowDownLeftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowDownLeftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowDownLeftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowDownLeftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowDownLeftFill ref={ref} {...rest} />;
  if (duotone) return <ArrowDownLeftRegularDuotone ref={ref} {...rest} />;
  return <ArrowDownLeftRegular ref={ref} {...rest} />;
}));

ArrowDownLeft.displayName = 'ArrowDownLeft';

// Triple export pattern (lucide-react style)
export { ArrowDownLeft, ArrowDownLeft as ArrowDownLeftIcon, ArrowDownLeft as SiArrowDownLeft };
