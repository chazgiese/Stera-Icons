import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BrightnessHighRegular } from './BrightnessHighRegular';
import { BrightnessHighRegularDuotone } from './BrightnessHighRegularDuotone';
import { BrightnessHighBold } from './BrightnessHighBold';
import { BrightnessHighBoldDuotone } from './BrightnessHighBoldDuotone';
import { BrightnessHighFill } from './BrightnessHighFill';
import { BrightnessHighFillDuotone } from './BrightnessHighFillDuotone';

export interface BrightnessHighProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * BrightnessHigh with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { BrightnessHighRegular } from 'stera-icons/BrightnessHighRegular';
 */
const BrightnessHigh = memo(forwardRef<SVGSVGElement, BrightnessHighProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BrightnessHighBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BrightnessHighBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BrightnessHighFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BrightnessHighFill ref={ref} {...rest} />;
  if (duotone) return <BrightnessHighRegularDuotone ref={ref} {...rest} />;
  return <BrightnessHighRegular ref={ref} {...rest} />;
}));

BrightnessHigh.displayName = 'BrightnessHigh';

export { BrightnessHigh };
