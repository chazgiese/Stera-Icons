import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { AngleAcuteRegular } from './AngleAcuteRegular.js';
import { AngleAcuteRegularDuotone } from './AngleAcuteRegularDuotone.js';
import { AngleAcuteBold } from './AngleAcuteBold.js';
import { AngleAcuteBoldDuotone } from './AngleAcuteBoldDuotone.js';
import { AngleAcuteFill } from './AngleAcuteFill.js';
import { AngleAcuteFillDuotone } from './AngleAcuteFillDuotone.js';

export interface AngleAcuteProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * AngleAcute - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AngleAcuteRegular } from 'stera-icons/icons/AngleAcuteRegular';
 */
const AngleAcute = memo(forwardRef<SVGSVGElement, AngleAcuteProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <AngleAcuteBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AngleAcuteBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AngleAcuteFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AngleAcuteFill ref={ref} {...rest} />;
  if (duotone) return <AngleAcuteRegularDuotone ref={ref} {...rest} />;
  return <AngleAcuteRegular ref={ref} {...rest} />;
}));

AngleAcute.displayName = 'AngleAcute';

// Triple export pattern (lucide-react style)
export { AngleAcute, AngleAcute as AngleAcuteIcon, AngleAcute as SiAngleAcute };
export default AngleAcute;
