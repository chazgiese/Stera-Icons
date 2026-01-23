import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ExclamationPointRegular } from './ExclamationPointRegular.js';
import { ExclamationPointRegularDuotone } from './ExclamationPointRegularDuotone.js';
import { ExclamationPointBold } from './ExclamationPointBold.js';
import { ExclamationPointBoldDuotone } from './ExclamationPointBoldDuotone.js';
import { ExclamationPointFill } from './ExclamationPointFill.js';
import { ExclamationPointFillDuotone } from './ExclamationPointFillDuotone.js';

export interface ExclamationPointProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ExclamationPoint - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ExclamationPointRegular } from 'stera-icons/icons/ExclamationPointRegular';
 */
const ExclamationPoint = memo(forwardRef<SVGSVGElement, ExclamationPointProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ExclamationPointBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ExclamationPointBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ExclamationPointFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ExclamationPointFill ref={ref} {...rest} />;
  if (duotone) return <ExclamationPointRegularDuotone ref={ref} {...rest} />;
  return <ExclamationPointRegular ref={ref} {...rest} />;
}));

ExclamationPoint.displayName = 'ExclamationPoint';

// Triple export pattern (lucide-react style)
export { ExclamationPoint, ExclamationPoint as ExclamationPointIcon, ExclamationPoint as SiExclamationPoint };
export default ExclamationPoint;
