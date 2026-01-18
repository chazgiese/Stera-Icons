import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ShieldAlertRegular } from './ShieldAlertRegular';
import { ShieldAlertRegularDuotone } from './ShieldAlertRegularDuotone';
import { ShieldAlertBold } from './ShieldAlertBold';
import { ShieldAlertBoldDuotone } from './ShieldAlertBoldDuotone';
import { ShieldAlertFill } from './ShieldAlertFill';
import { ShieldAlertFillDuotone } from './ShieldAlertFillDuotone';

export interface ShieldAlertProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ShieldAlert - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ShieldAlertRegular } from 'stera-icons/ShieldAlertRegular';
 */
const ShieldAlert = memo(forwardRef<SVGSVGElement, ShieldAlertProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ShieldAlertBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ShieldAlertBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ShieldAlertFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ShieldAlertFill ref={ref} {...rest} />;
  if (duotone) return <ShieldAlertRegularDuotone ref={ref} {...rest} />;
  return <ShieldAlertRegular ref={ref} {...rest} />;
}));

ShieldAlert.displayName = 'ShieldAlert';

// Triple export pattern (lucide-react style)
export { ShieldAlert, ShieldAlert as ShieldAlertIcon, ShieldAlert as SiShieldAlert };
