import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BuildingRegular } from './BuildingRegular';
import { BuildingRegularDuotone } from './BuildingRegularDuotone';
import { BuildingBold } from './BuildingBold';
import { BuildingBoldDuotone } from './BuildingBoldDuotone';
import { BuildingFill } from './BuildingFill';
import { BuildingFillDuotone } from './BuildingFillDuotone';

export interface BuildingProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Building with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { BuildingRegular } from 'stera-icons/BuildingRegular';
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

export { Building };
