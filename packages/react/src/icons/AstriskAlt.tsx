import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AstriskAltRegular } from './AstriskAltRegular';
import { AstriskAltRegularDuotone } from './AstriskAltRegularDuotone';
import { AstriskAltBold } from './AstriskAltBold';
import { AstriskAltBoldDuotone } from './AstriskAltBoldDuotone';
import { AstriskAltFill } from './AstriskAltFill';
import { AstriskAltFillDuotone } from './AstriskAltFillDuotone';

export interface AstriskAltProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * AstriskAlt - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AstriskAltRegular } from 'stera-icons/AstriskAltRegular';
 */
const AstriskAlt = memo(forwardRef<SVGSVGElement, AstriskAltProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <AstriskAltBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AstriskAltBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AstriskAltFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AstriskAltFill ref={ref} {...rest} />;
  if (duotone) return <AstriskAltRegularDuotone ref={ref} {...rest} />;
  return <AstriskAltRegular ref={ref} {...rest} />;
}));

AstriskAlt.displayName = 'AstriskAlt';

// Triple export pattern (lucide-react style)
export { AstriskAlt, AstriskAlt as AstriskAltIcon, AstriskAlt as SiAstriskAlt };
