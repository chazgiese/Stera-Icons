import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SpinnerRegular } from './SpinnerRegular.js';
import { SpinnerRegularDuotone } from './SpinnerRegularDuotone.js';
import { SpinnerBold } from './SpinnerBold.js';
import { SpinnerBoldDuotone } from './SpinnerBoldDuotone.js';
import { SpinnerFill } from './SpinnerFill.js';
import { SpinnerFillDuotone } from './SpinnerFillDuotone.js';

export interface SpinnerProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Spinner - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SpinnerRegular } from 'stera-icons/icons/SpinnerRegular';
 */
const Spinner = memo(forwardRef<SVGSVGElement, SpinnerProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SpinnerBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SpinnerBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SpinnerFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SpinnerFill ref={ref} {...rest} />;
  if (duotone) return <SpinnerRegularDuotone ref={ref} {...rest} />;
  return <SpinnerRegular ref={ref} {...rest} />;
}));

Spinner.displayName = 'Spinner';

// Triple export pattern (lucide-react style)
export { Spinner, Spinner as SpinnerIcon, Spinner as SiSpinner };
export default Spinner;
