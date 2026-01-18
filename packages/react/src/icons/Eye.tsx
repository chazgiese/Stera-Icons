import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { EyeRegular } from './EyeRegular';
import { EyeRegularDuotone } from './EyeRegularDuotone';
import { EyeBold } from './EyeBold';
import { EyeBoldDuotone } from './EyeBoldDuotone';
import { EyeFill } from './EyeFill';
import { EyeFillDuotone } from './EyeFillDuotone';

export interface EyeProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Eye - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { EyeRegular } from 'stera-icons/EyeRegular';
 */
const Eye = memo(forwardRef<SVGSVGElement, EyeProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <EyeBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <EyeBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <EyeFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <EyeFill ref={ref} {...rest} />;
  if (duotone) return <EyeRegularDuotone ref={ref} {...rest} />;
  return <EyeRegular ref={ref} {...rest} />;
}));

Eye.displayName = 'Eye';

// Triple export pattern (lucide-react style)
export { Eye, Eye as EyeIcon, Eye as SiEye };
