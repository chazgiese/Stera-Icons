import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BrainCircuitRegular } from './BrainCircuitRegular';
import { BrainCircuitRegularDuotone } from './BrainCircuitRegularDuotone';
import { BrainCircuitBold } from './BrainCircuitBold';
import { BrainCircuitBoldDuotone } from './BrainCircuitBoldDuotone';
import { BrainCircuitFill } from './BrainCircuitFill';
import { BrainCircuitFillDuotone } from './BrainCircuitFillDuotone';

export interface BrainCircuitProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * BrainCircuit - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BrainCircuitRegular } from 'stera-icons/icons/BrainCircuitRegular';
 */
const BrainCircuit = memo(forwardRef<SVGSVGElement, BrainCircuitProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BrainCircuitBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BrainCircuitBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BrainCircuitFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BrainCircuitFill ref={ref} {...rest} />;
  if (duotone) return <BrainCircuitRegularDuotone ref={ref} {...rest} />;
  return <BrainCircuitRegular ref={ref} {...rest} />;
}));

BrainCircuit.displayName = 'BrainCircuit';

// Triple export pattern (lucide-react style)
export { BrainCircuit, BrainCircuit as BrainCircuitIcon, BrainCircuit as SiBrainCircuit };
export default BrainCircuit;
