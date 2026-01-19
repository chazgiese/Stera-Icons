import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DuplicatePlusRegular } from './DuplicatePlusRegular';
import { DuplicatePlusRegularDuotone } from './DuplicatePlusRegularDuotone';
import { DuplicatePlusBold } from './DuplicatePlusBold';
import { DuplicatePlusBoldDuotone } from './DuplicatePlusBoldDuotone';
import { DuplicatePlusFill } from './DuplicatePlusFill';
import { DuplicatePlusFillDuotone } from './DuplicatePlusFillDuotone';

export interface DuplicatePlusProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * DuplicatePlus - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { DuplicatePlusRegular } from 'stera-icons/icons/DuplicatePlusRegular';
 */
const DuplicatePlus = memo(forwardRef<SVGSVGElement, DuplicatePlusProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <DuplicatePlusBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <DuplicatePlusBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <DuplicatePlusFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <DuplicatePlusFill ref={ref} {...rest} />;
  if (duotone) return <DuplicatePlusRegularDuotone ref={ref} {...rest} />;
  return <DuplicatePlusRegular ref={ref} {...rest} />;
}));

DuplicatePlus.displayName = 'DuplicatePlus';

// Triple export pattern (lucide-react style)
export { DuplicatePlus, DuplicatePlus as DuplicatePlusIcon, DuplicatePlus as SiDuplicatePlus };
