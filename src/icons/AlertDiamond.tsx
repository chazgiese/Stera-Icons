import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AlertDiamondRegular } from './AlertDiamondRegular';
import { AlertDiamondRegularDuotone } from './AlertDiamondRegularDuotone';
import { AlertDiamondBold } from './AlertDiamondBold';
import { AlertDiamondBoldDuotone } from './AlertDiamondBoldDuotone';
import { AlertDiamondFill } from './AlertDiamondFill';
import { AlertDiamondFillDuotone } from './AlertDiamondFillDuotone';

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
