import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SlidersVRegular } from './SlidersVRegular';
import { SlidersVRegularDuotone } from './SlidersVRegularDuotone';
import { SlidersVBold } from './SlidersVBold';
import { SlidersVBoldDuotone } from './SlidersVBoldDuotone';
import { SlidersVFill } from './SlidersVFill';
import { SlidersVFillDuotone } from './SlidersVFillDuotone';

export interface SlidersVProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * SlidersV - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SlidersVRegular } from 'stera-icons/icons/SlidersVRegular';
 */
const SlidersV = memo(forwardRef<SVGSVGElement, SlidersVProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SlidersVBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SlidersVBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SlidersVFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SlidersVFill ref={ref} {...rest} />;
  if (duotone) return <SlidersVRegularDuotone ref={ref} {...rest} />;
  return <SlidersVRegular ref={ref} {...rest} />;
}));

SlidersV.displayName = 'SlidersV';

// Triple export pattern (lucide-react style)
export { SlidersV, SlidersV as SlidersVIcon, SlidersV as SiSlidersV };
