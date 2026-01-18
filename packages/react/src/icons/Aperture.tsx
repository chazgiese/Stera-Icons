import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ApertureRegular } from './ApertureRegular';
import { ApertureRegularDuotone } from './ApertureRegularDuotone';
import { ApertureBold } from './ApertureBold';
import { ApertureBoldDuotone } from './ApertureBoldDuotone';
import { ApertureFill } from './ApertureFill';
import { ApertureFillDuotone } from './ApertureFillDuotone';

export interface ApertureProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Aperture - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ApertureRegular } from 'stera-icons/ApertureRegular';
 */
const Aperture = memo(forwardRef<SVGSVGElement, ApertureProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ApertureBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ApertureBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ApertureFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ApertureFill ref={ref} {...rest} />;
  if (duotone) return <ApertureRegularDuotone ref={ref} {...rest} />;
  return <ApertureRegular ref={ref} {...rest} />;
}));

Aperture.displayName = 'Aperture';

// Triple export pattern (lucide-react style)
export { Aperture, Aperture as ApertureIcon, Aperture as SiAperture };
