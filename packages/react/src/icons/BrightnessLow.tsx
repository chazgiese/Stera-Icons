import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BrightnessLowRegular } from './BrightnessLowRegular';
import { BrightnessLowRegularDuotone } from './BrightnessLowRegularDuotone';
import { BrightnessLowBold } from './BrightnessLowBold';
import { BrightnessLowBoldDuotone } from './BrightnessLowBoldDuotone';
import { BrightnessLowFill } from './BrightnessLowFill';
import { BrightnessLowFillDuotone } from './BrightnessLowFillDuotone';

export interface BrightnessLowProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * BrightnessLow with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { BrightnessLowRegular } from 'stera-icons/BrightnessLowRegular';
 */
const BrightnessLow = memo(forwardRef<SVGSVGElement, BrightnessLowProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BrightnessLowBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BrightnessLowBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BrightnessLowFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BrightnessLowFill ref={ref} {...rest} />;
  if (duotone) return <BrightnessLowRegularDuotone ref={ref} {...rest} />;
  return <BrightnessLowRegular ref={ref} {...rest} />;
}));

BrightnessLow.displayName = 'BrightnessLow';

export { BrightnessLow };
