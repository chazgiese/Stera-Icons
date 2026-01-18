import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BellOffRegular } from './BellOffRegular';
import { BellOffRegularDuotone } from './BellOffRegularDuotone';
import { BellOffBold } from './BellOffBold';
import { BellOffBoldDuotone } from './BellOffBoldDuotone';
import { BellOffFill } from './BellOffFill';
import { BellOffFillDuotone } from './BellOffFillDuotone';

export interface BellOffProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * BellOff - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BellOffRegular } from 'stera-icons/BellOffRegular';
 */
const BellOff = memo(forwardRef<SVGSVGElement, BellOffProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BellOffBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BellOffBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BellOffFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BellOffFill ref={ref} {...rest} />;
  if (duotone) return <BellOffRegularDuotone ref={ref} {...rest} />;
  return <BellOffRegular ref={ref} {...rest} />;
}));

BellOff.displayName = 'BellOff';

// Triple export pattern (lucide-react style)
export { BellOff, BellOff as BellOffIcon, BellOff as SiBellOff };
