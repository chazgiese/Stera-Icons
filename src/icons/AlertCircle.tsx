import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AlertCircleRegular } from './AlertCircleRegular';
import { AlertCircleRegularDuotone } from './AlertCircleRegularDuotone';
import { AlertCircleBold } from './AlertCircleBold';
import { AlertCircleBoldDuotone } from './AlertCircleBoldDuotone';
import { AlertCircleFill } from './AlertCircleFill';
import { AlertCircleFillDuotone } from './AlertCircleFillDuotone';

export interface AlertCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * AlertCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AlertCircleRegular } from 'stera-icons/icons/AlertCircleRegular';
 */
const AlertCircle = memo(forwardRef<SVGSVGElement, AlertCircleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <AlertCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AlertCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AlertCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AlertCircleFill ref={ref} {...rest} />;
  if (duotone) return <AlertCircleRegularDuotone ref={ref} {...rest} />;
  return <AlertCircleRegular ref={ref} {...rest} />;
}));

AlertCircle.displayName = 'AlertCircle';

// Triple export pattern (lucide-react style)
export { AlertCircle, AlertCircle as AlertCircleIcon, AlertCircle as SiAlertCircle };
export default AlertCircle;
