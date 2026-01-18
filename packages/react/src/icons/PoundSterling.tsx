import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PoundSterlingRegular } from './PoundSterlingRegular';
import { PoundSterlingRegularDuotone } from './PoundSterlingRegularDuotone';
import { PoundSterlingBold } from './PoundSterlingBold';
import { PoundSterlingBoldDuotone } from './PoundSterlingBoldDuotone';
import { PoundSterlingFill } from './PoundSterlingFill';
import { PoundSterlingFillDuotone } from './PoundSterlingFillDuotone';

export interface PoundSterlingProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * PoundSterling - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PoundSterlingRegular } from 'stera-icons/PoundSterlingRegular';
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
