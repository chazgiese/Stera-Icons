import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AlertOctagonRegular } from './AlertOctagonRegular';
import { AlertOctagonRegularDuotone } from './AlertOctagonRegularDuotone';
import { AlertOctagonBold } from './AlertOctagonBold';
import { AlertOctagonBoldDuotone } from './AlertOctagonBoldDuotone';
import { AlertOctagonFill } from './AlertOctagonFill';
import { AlertOctagonFillDuotone } from './AlertOctagonFillDuotone';

export interface AlertOctagonProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * AlertOctagon - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AlertOctagonRegular } from 'stera-icons/icons/AlertOctagonRegular';
 */
const AlertOctagon = memo(forwardRef<SVGSVGElement, AlertOctagonProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <AlertOctagonBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AlertOctagonBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AlertOctagonFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AlertOctagonFill ref={ref} {...rest} />;
  if (duotone) return <AlertOctagonRegularDuotone ref={ref} {...rest} />;
  return <AlertOctagonRegular ref={ref} {...rest} />;
}));

AlertOctagon.displayName = 'AlertOctagon';

// Triple export pattern (lucide-react style)
export { AlertOctagon, AlertOctagon as AlertOctagonIcon, AlertOctagon as SiAlertOctagon };
export default AlertOctagon;
