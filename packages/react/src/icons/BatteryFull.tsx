import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BatteryFullRegular } from './BatteryFullRegular';
import { BatteryFullRegularDuotone } from './BatteryFullRegularDuotone';
import { BatteryFullBold } from './BatteryFullBold';
import { BatteryFullBoldDuotone } from './BatteryFullBoldDuotone';
import { BatteryFullFill } from './BatteryFullFill';
import { BatteryFullFillDuotone } from './BatteryFullFillDuotone';

export interface BatteryFullProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * BatteryFull with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { BatteryFullRegular } from 'stera-icons/BatteryFullRegular';
 */
const BatteryFull = memo(forwardRef<SVGSVGElement, BatteryFullProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BatteryFullBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BatteryFullBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BatteryFullFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BatteryFullFill ref={ref} {...rest} />;
  if (duotone) return <BatteryFullRegularDuotone ref={ref} {...rest} />;
  return <BatteryFullRegular ref={ref} {...rest} />;
}));

BatteryFull.displayName = 'BatteryFull';

export { BatteryFull };
