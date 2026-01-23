import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { AlertTriangleRegular } from './AlertTriangleRegular.js';
import { AlertTriangleRegularDuotone } from './AlertTriangleRegularDuotone.js';
import { AlertTriangleBold } from './AlertTriangleBold.js';
import { AlertTriangleBoldDuotone } from './AlertTriangleBoldDuotone.js';
import { AlertTriangleFill } from './AlertTriangleFill.js';
import { AlertTriangleFillDuotone } from './AlertTriangleFillDuotone.js';

export interface AlertTriangleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * AlertTriangle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AlertTriangleRegular } from 'stera-icons/icons/AlertTriangleRegular';
 */
const AlertTriangle = memo(forwardRef<SVGSVGElement, AlertTriangleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <AlertTriangleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AlertTriangleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AlertTriangleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AlertTriangleFill ref={ref} {...rest} />;
  if (duotone) return <AlertTriangleRegularDuotone ref={ref} {...rest} />;
  return <AlertTriangleRegular ref={ref} {...rest} />;
}));

AlertTriangle.displayName = 'AlertTriangle';

// Triple export pattern (lucide-react style)
export { AlertTriangle, AlertTriangle as AlertTriangleIcon, AlertTriangle as SiAlertTriangle };
export default AlertTriangle;
