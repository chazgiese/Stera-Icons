import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BatteryHalfRegular } from './BatteryHalfRegular';
import { BatteryHalfRegularDuotone } from './BatteryHalfRegularDuotone';
import { BatteryHalfBold } from './BatteryHalfBold';
import { BatteryHalfBoldDuotone } from './BatteryHalfBoldDuotone';
import { BatteryHalfFill } from './BatteryHalfFill';
import { BatteryHalfFillDuotone } from './BatteryHalfFillDuotone';

export interface BatteryHalfProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * BatteryHalf with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { BatteryHalfRegular } from 'stera-icons/BatteryHalfRegular';
 */
const BatteryHalf = memo(forwardRef<SVGSVGElement, BatteryHalfProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BatteryHalfBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BatteryHalfBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BatteryHalfFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BatteryHalfFill ref={ref} {...rest} />;
  if (duotone) return <BatteryHalfRegularDuotone ref={ref} {...rest} />;
  return <BatteryHalfRegular ref={ref} {...rest} />;
}));

BatteryHalf.displayName = 'BatteryHalf';

export { BatteryHalf };
