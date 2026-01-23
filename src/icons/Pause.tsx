import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { PauseRegular } from './PauseRegular.js';
import { PauseRegularDuotone } from './PauseRegularDuotone.js';
import { PauseBold } from './PauseBold.js';
import { PauseBoldDuotone } from './PauseBoldDuotone.js';
import { PauseFill } from './PauseFill.js';
import { PauseFillDuotone } from './PauseFillDuotone.js';

export interface PauseProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Pause - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PauseRegular } from 'stera-icons/icons/PauseRegular';
 */
const Pause = memo(forwardRef<SVGSVGElement, PauseProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PauseBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PauseBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PauseFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PauseFill ref={ref} {...rest} />;
  if (duotone) return <PauseRegularDuotone ref={ref} {...rest} />;
  return <PauseRegular ref={ref} {...rest} />;
}));

Pause.displayName = 'Pause';

// Triple export pattern (lucide-react style)
export { Pause, Pause as PauseIcon, Pause as SiPause };
export default Pause;
