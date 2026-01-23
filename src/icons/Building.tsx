import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { BuildingRegular } from './BuildingRegular.js';
import { BuildingRegularDuotone } from './BuildingRegularDuotone.js';
import { BuildingBold } from './BuildingBold.js';
import { BuildingBoldDuotone } from './BuildingBoldDuotone.js';
import { BuildingFill } from './BuildingFill.js';
import { BuildingFillDuotone } from './BuildingFillDuotone.js';

export interface BuildingProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Building - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BuildingRegular } from 'stera-icons/icons/BuildingRegular';
 */
const Building = memo(forwardRef<SVGSVGElement, BuildingProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BuildingBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BuildingBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BuildingFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BuildingFill ref={ref} {...rest} />;
  if (duotone) return <BuildingRegularDuotone ref={ref} {...rest} />;
  return <BuildingRegular ref={ref} {...rest} />;
}));

Building.displayName = 'Building';

// Triple export pattern (lucide-react style)
export { Building, Building as BuildingIcon, Building as SiBuilding };
export default Building;
