import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AlertHexagonRegular } from './AlertHexagonRegular';
import { AlertHexagonRegularDuotone } from './AlertHexagonRegularDuotone';
import { AlertHexagonBold } from './AlertHexagonBold';
import { AlertHexagonBoldDuotone } from './AlertHexagonBoldDuotone';
import { AlertHexagonFill } from './AlertHexagonFill';
import { AlertHexagonFillDuotone } from './AlertHexagonFillDuotone';

export interface AlertHexagonProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * AlertHexagon - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AlertHexagonRegular } from 'stera-icons/icons/AlertHexagonRegular';
 */
const AlertHexagon = memo(forwardRef<SVGSVGElement, AlertHexagonProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <AlertHexagonBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AlertHexagonBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AlertHexagonFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AlertHexagonFill ref={ref} {...rest} />;
  if (duotone) return <AlertHexagonRegularDuotone ref={ref} {...rest} />;
  return <AlertHexagonRegular ref={ref} {...rest} />;
}));

AlertHexagon.displayName = 'AlertHexagon';

// Triple export pattern (lucide-react style)
export { AlertHexagon, AlertHexagon as AlertHexagonIcon, AlertHexagon as SiAlertHexagon };
export default AlertHexagon;
