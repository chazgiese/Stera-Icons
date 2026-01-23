import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MicOffRegular } from './MicOffRegular.js';
import { MicOffRegularDuotone } from './MicOffRegularDuotone.js';
import { MicOffBold } from './MicOffBold.js';
import { MicOffBoldDuotone } from './MicOffBoldDuotone.js';
import { MicOffFill } from './MicOffFill.js';
import { MicOffFillDuotone } from './MicOffFillDuotone.js';

export interface MicOffProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MicOff - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MicOffRegular } from 'stera-icons/icons/MicOffRegular';
 */
const MicOff = memo(forwardRef<SVGSVGElement, MicOffProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MicOffBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MicOffBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MicOffFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MicOffFill ref={ref} {...rest} />;
  if (duotone) return <MicOffRegularDuotone ref={ref} {...rest} />;
  return <MicOffRegular ref={ref} {...rest} />;
}));

MicOff.displayName = 'MicOff';

// Triple export pattern (lucide-react style)
export { MicOff, MicOff as MicOffIcon, MicOff as SiMicOff };
export default MicOff;
