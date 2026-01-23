import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { EyeClosedRegular } from './EyeClosedRegular.js';
import { EyeClosedRegularDuotone } from './EyeClosedRegularDuotone.js';
import { EyeClosedBold } from './EyeClosedBold.js';
import { EyeClosedBoldDuotone } from './EyeClosedBoldDuotone.js';
import { EyeClosedFill } from './EyeClosedFill.js';
import { EyeClosedFillDuotone } from './EyeClosedFillDuotone.js';

export interface EyeClosedProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * EyeClosed - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { EyeClosedRegular } from 'stera-icons/icons/EyeClosedRegular';
 */
const EyeClosed = memo(forwardRef<SVGSVGElement, EyeClosedProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <EyeClosedBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <EyeClosedBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <EyeClosedFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <EyeClosedFill ref={ref} {...rest} />;
  if (duotone) return <EyeClosedRegularDuotone ref={ref} {...rest} />;
  return <EyeClosedRegular ref={ref} {...rest} />;
}));

EyeClosed.displayName = 'EyeClosed';

// Triple export pattern (lucide-react style)
export { EyeClosed, EyeClosed as EyeClosedIcon, EyeClosed as SiEyeClosed };
export default EyeClosed;
