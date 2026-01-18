import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SpinnerRegular } from './SpinnerRegular';
import { SpinnerRegularDuotone } from './SpinnerRegularDuotone';
import { SpinnerBold } from './SpinnerBold';
import { SpinnerBoldDuotone } from './SpinnerBoldDuotone';
import { SpinnerFill } from './SpinnerFill';
import { SpinnerFillDuotone } from './SpinnerFillDuotone';

export interface SpinnerProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Spinner - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SpinnerRegular } from 'stera-icons/SpinnerRegular';
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
