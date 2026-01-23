import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { EyeRegular } from './EyeRegular.js';
import { EyeRegularDuotone } from './EyeRegularDuotone.js';
import { EyeBold } from './EyeBold.js';
import { EyeBoldDuotone } from './EyeBoldDuotone.js';
import { EyeFill } from './EyeFill.js';
import { EyeFillDuotone } from './EyeFillDuotone.js';

export interface EyeProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Eye - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { EyeRegular } from 'stera-icons/icons/EyeRegular';
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
export default Eye;
