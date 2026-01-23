import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { AlertDiamondRegular } from './AlertDiamondRegular.js';
import { AlertDiamondRegularDuotone } from './AlertDiamondRegularDuotone.js';
import { AlertDiamondBold } from './AlertDiamondBold.js';
import { AlertDiamondBoldDuotone } from './AlertDiamondBoldDuotone.js';
import { AlertDiamondFill } from './AlertDiamondFill.js';
import { AlertDiamondFillDuotone } from './AlertDiamondFillDuotone.js';

export interface AlertDiamondProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * AlertDiamond - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AlertDiamondRegular } from 'stera-icons/icons/AlertDiamondRegular';
 */
const AlertDiamond = memo(forwardRef<SVGSVGElement, AlertDiamondProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <AlertDiamondBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AlertDiamondBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AlertDiamondFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AlertDiamondFill ref={ref} {...rest} />;
  if (duotone) return <AlertDiamondRegularDuotone ref={ref} {...rest} />;
  return <AlertDiamondRegular ref={ref} {...rest} />;
}));

AlertDiamond.displayName = 'AlertDiamond';

// Triple export pattern (lucide-react style)
export { AlertDiamond, AlertDiamond as AlertDiamondIcon, AlertDiamond as SiAlertDiamond };
export default AlertDiamond;
