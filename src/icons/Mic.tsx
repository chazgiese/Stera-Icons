import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { MicRegular } from './MicRegular.js';
import { MicRegularDuotone } from './MicRegularDuotone.js';
import { MicBold } from './MicBold.js';
import { MicBoldDuotone } from './MicBoldDuotone.js';
import { MicFill } from './MicFill.js';
import { MicFillDuotone } from './MicFillDuotone.js';

export interface MicProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Mic - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MicRegular } from 'stera-icons/icons/MicRegular';
 */
const Mic = memo(forwardRef<SVGSVGElement, MicProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MicBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MicBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MicFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MicFill ref={ref} {...rest} />;
  if (duotone) return <MicRegularDuotone ref={ref} {...rest} />;
  return <MicRegular ref={ref} {...rest} />;
}));

Mic.displayName = 'Mic';

// Triple export pattern (lucide-react style)
export { Mic, Mic as MicIcon, Mic as SiMic };
export default Mic;
