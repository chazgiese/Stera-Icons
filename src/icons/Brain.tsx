import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BrainRegular } from './BrainRegular';
import { BrainRegularDuotone } from './BrainRegularDuotone';
import { BrainBold } from './BrainBold';
import { BrainBoldDuotone } from './BrainBoldDuotone';
import { BrainFill } from './BrainFill';
import { BrainFillDuotone } from './BrainFillDuotone';

export interface BrainProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Brain - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BrainRegular } from 'stera-icons/icons/BrainRegular';
 */
const Brain = memo(forwardRef<SVGSVGElement, BrainProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BrainBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BrainBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BrainFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BrainFill ref={ref} {...rest} />;
  if (duotone) return <BrainRegularDuotone ref={ref} {...rest} />;
  return <BrainRegular ref={ref} {...rest} />;
}));

Brain.displayName = 'Brain';

// Triple export pattern (lucide-react style)
export { Brain, Brain as BrainIcon, Brain as SiBrain };
export default Brain;
