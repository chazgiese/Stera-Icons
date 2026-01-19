import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CylinderRegular } from './CylinderRegular';
import { CylinderRegularDuotone } from './CylinderRegularDuotone';
import { CylinderBold } from './CylinderBold';
import { CylinderBoldDuotone } from './CylinderBoldDuotone';
import { CylinderFill } from './CylinderFill';
import { CylinderFillDuotone } from './CylinderFillDuotone';

export interface CylinderProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Cylinder - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CylinderRegular } from 'stera-icons/icons/CylinderRegular';
 */
const Cylinder = memo(forwardRef<SVGSVGElement, CylinderProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CylinderBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CylinderBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CylinderFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CylinderFill ref={ref} {...rest} />;
  if (duotone) return <CylinderRegularDuotone ref={ref} {...rest} />;
  return <CylinderRegular ref={ref} {...rest} />;
}));

Cylinder.displayName = 'Cylinder';

// Triple export pattern (lucide-react style)
export { Cylinder, Cylinder as CylinderIcon, Cylinder as SiCylinder };
export default Cylinder;
