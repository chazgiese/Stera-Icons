import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { AngleObtuseRegular } from './AngleObtuseRegular.js';
import { AngleObtuseRegularDuotone } from './AngleObtuseRegularDuotone.js';
import { AngleObtuseBold } from './AngleObtuseBold.js';
import { AngleObtuseBoldDuotone } from './AngleObtuseBoldDuotone.js';
import { AngleObtuseFill } from './AngleObtuseFill.js';
import { AngleObtuseFillDuotone } from './AngleObtuseFillDuotone.js';

export interface AngleObtuseProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * AngleObtuse - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AngleObtuseRegular } from 'stera-icons/icons/AngleObtuseRegular';
 */
const AngleObtuse = memo(forwardRef<SVGSVGElement, AngleObtuseProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <AngleObtuseBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AngleObtuseBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AngleObtuseFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AngleObtuseFill ref={ref} {...rest} />;
  if (duotone) return <AngleObtuseRegularDuotone ref={ref} {...rest} />;
  return <AngleObtuseRegular ref={ref} {...rest} />;
}));

AngleObtuse.displayName = 'AngleObtuse';

// Triple export pattern (lucide-react style)
export { AngleObtuse, AngleObtuse as AngleObtuseIcon, AngleObtuse as SiAngleObtuse };
export default AngleObtuse;
