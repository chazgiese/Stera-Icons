import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MedicalCrossRegular } from './MedicalCrossRegular';
import { MedicalCrossRegularDuotone } from './MedicalCrossRegularDuotone';
import { MedicalCrossBold } from './MedicalCrossBold';
import { MedicalCrossBoldDuotone } from './MedicalCrossBoldDuotone';
import { MedicalCrossFill } from './MedicalCrossFill';
import { MedicalCrossFillDuotone } from './MedicalCrossFillDuotone';

export interface MedicalCrossProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * MedicalCross - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MedicalCrossRegular } from 'stera-icons/icons/MedicalCrossRegular';
 */
const MedicalCross = memo(forwardRef<SVGSVGElement, MedicalCrossProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MedicalCrossBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MedicalCrossBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MedicalCrossFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MedicalCrossFill ref={ref} {...rest} />;
  if (duotone) return <MedicalCrossRegularDuotone ref={ref} {...rest} />;
  return <MedicalCrossRegular ref={ref} {...rest} />;
}));

MedicalCross.displayName = 'MedicalCross';

// Triple export pattern (lucide-react style)
export { MedicalCross, MedicalCross as MedicalCrossIcon, MedicalCross as SiMedicalCross };
