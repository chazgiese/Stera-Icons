import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CylinderRegular } from './CylinderRegular.js';
import { CylinderRegularDuotone } from './CylinderRegularDuotone.js';
import { CylinderBold } from './CylinderBold.js';
import { CylinderBoldDuotone } from './CylinderBoldDuotone.js';
import { CylinderFill } from './CylinderFill.js';
import { CylinderFillDuotone } from './CylinderFillDuotone.js';

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
