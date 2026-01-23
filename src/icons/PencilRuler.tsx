import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { PencilRulerRegular } from './PencilRulerRegular.js';
import { PencilRulerRegularDuotone } from './PencilRulerRegularDuotone.js';
import { PencilRulerBold } from './PencilRulerBold.js';
import { PencilRulerBoldDuotone } from './PencilRulerBoldDuotone.js';
import { PencilRulerFill } from './PencilRulerFill.js';
import { PencilRulerFillDuotone } from './PencilRulerFillDuotone.js';

export interface PencilRulerProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * PencilRuler - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PencilRulerRegular } from 'stera-icons/icons/PencilRulerRegular';
 */
const PencilRuler = memo(forwardRef<SVGSVGElement, PencilRulerProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PencilRulerBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PencilRulerBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PencilRulerFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PencilRulerFill ref={ref} {...rest} />;
  if (duotone) return <PencilRulerRegularDuotone ref={ref} {...rest} />;
  return <PencilRulerRegular ref={ref} {...rest} />;
}));

PencilRuler.displayName = 'PencilRuler';

// Triple export pattern (lucide-react style)
export { PencilRuler, PencilRuler as PencilRulerIcon, PencilRuler as SiPencilRuler };
export default PencilRuler;
