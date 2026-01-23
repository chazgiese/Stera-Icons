import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { PoundSterlingRegular } from './PoundSterlingRegular.js';
import { PoundSterlingRegularDuotone } from './PoundSterlingRegularDuotone.js';
import { PoundSterlingBold } from './PoundSterlingBold.js';
import { PoundSterlingBoldDuotone } from './PoundSterlingBoldDuotone.js';
import { PoundSterlingFill } from './PoundSterlingFill.js';
import { PoundSterlingFillDuotone } from './PoundSterlingFillDuotone.js';

export interface PoundSterlingProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * PoundSterling - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PoundSterlingRegular } from 'stera-icons/icons/PoundSterlingRegular';
 */
const PoundSterling = memo(forwardRef<SVGSVGElement, PoundSterlingProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PoundSterlingBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PoundSterlingBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PoundSterlingFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PoundSterlingFill ref={ref} {...rest} />;
  if (duotone) return <PoundSterlingRegularDuotone ref={ref} {...rest} />;
  return <PoundSterlingRegular ref={ref} {...rest} />;
}));

PoundSterling.displayName = 'PoundSterling';

// Triple export pattern (lucide-react style)
export { PoundSterling, PoundSterling as PoundSterlingIcon, PoundSterling as SiPoundSterling };
export default PoundSterling;
