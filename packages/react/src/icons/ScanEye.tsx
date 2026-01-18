import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ScanEyeRegular } from './ScanEyeRegular';
import { ScanEyeRegularDuotone } from './ScanEyeRegularDuotone';
import { ScanEyeBold } from './ScanEyeBold';
import { ScanEyeBoldDuotone } from './ScanEyeBoldDuotone';
import { ScanEyeFill } from './ScanEyeFill';
import { ScanEyeFillDuotone } from './ScanEyeFillDuotone';

export interface ScanEyeProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ScanEye with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ScanEyeRegular } from 'stera-icons/ScanEyeRegular';
 */
const ScanEye = memo(forwardRef<SVGSVGElement, ScanEyeProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ScanEyeBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ScanEyeBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ScanEyeFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ScanEyeFill ref={ref} {...rest} />;
  if (duotone) return <ScanEyeRegularDuotone ref={ref} {...rest} />;
  return <ScanEyeRegular ref={ref} {...rest} />;
}));

ScanEye.displayName = 'ScanEye';

export { ScanEye };
