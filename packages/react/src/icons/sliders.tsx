import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SlidersRegular } from './SlidersRegular';
import { SlidersRegularDuotone } from './SlidersRegularDuotone';
import { SlidersBold } from './SlidersBold';
import { SlidersBoldDuotone } from './SlidersBoldDuotone';
import { SlidersFill } from './SlidersFill';
import { SlidersFillDuotone } from './SlidersFillDuotone';

export interface SlidersProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Sliders with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { SlidersRegular } from 'stera-icons/SlidersRegular';
 */
const Sliders = memo(forwardRef<SVGSVGElement, SlidersProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SlidersBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SlidersBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SlidersFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SlidersFill ref={ref} {...rest} />;
  if (duotone) return <SlidersRegularDuotone ref={ref} {...rest} />;
  return <SlidersRegular ref={ref} {...rest} />;
}));

Sliders.displayName = 'Sliders';

export { Sliders };
