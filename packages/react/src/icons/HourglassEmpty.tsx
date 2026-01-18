import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HourglassEmptyRegular } from './HourglassEmptyRegular';
import { HourglassEmptyRegularDuotone } from './HourglassEmptyRegularDuotone';
import { HourglassEmptyBold } from './HourglassEmptyBold';
import { HourglassEmptyBoldDuotone } from './HourglassEmptyBoldDuotone';
import { HourglassEmptyFill } from './HourglassEmptyFill';
import { HourglassEmptyFillDuotone } from './HourglassEmptyFillDuotone';

export interface HourglassEmptyProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * HourglassEmpty with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { HourglassEmptyRegular } from 'stera-icons/HourglassEmptyRegular';
 */
const HourglassEmpty = memo(forwardRef<SVGSVGElement, HourglassEmptyProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <HourglassEmptyBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <HourglassEmptyBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <HourglassEmptyFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <HourglassEmptyFill ref={ref} {...rest} />;
  if (duotone) return <HourglassEmptyRegularDuotone ref={ref} {...rest} />;
  return <HourglassEmptyRegular ref={ref} {...rest} />;
}));

HourglassEmpty.displayName = 'HourglassEmpty';

export { HourglassEmpty };
