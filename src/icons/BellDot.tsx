import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BellDotRegular } from './BellDotRegular';
import { BellDotRegularDuotone } from './BellDotRegularDuotone';
import { BellDotBold } from './BellDotBold';
import { BellDotBoldDuotone } from './BellDotBoldDuotone';
import { BellDotFill } from './BellDotFill';
import { BellDotFillDuotone } from './BellDotFillDuotone';

export interface BellDotProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * BellDot - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BellDotRegular } from 'stera-icons/icons/BellDotRegular';
 */
const BellDot = memo(forwardRef<SVGSVGElement, BellDotProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BellDotBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BellDotBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BellDotFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BellDotFill ref={ref} {...rest} />;
  if (duotone) return <BellDotRegularDuotone ref={ref} {...rest} />;
  return <BellDotRegular ref={ref} {...rest} />;
}));

BellDot.displayName = 'BellDot';

// Triple export pattern (lucide-react style)
export { BellDot, BellDot as BellDotIcon, BellDot as SiBellDot };
