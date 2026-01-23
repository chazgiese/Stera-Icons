import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { DuplicatePlusRegular } from './DuplicatePlusRegular.js';
import { DuplicatePlusRegularDuotone } from './DuplicatePlusRegularDuotone.js';
import { DuplicatePlusBold } from './DuplicatePlusBold.js';
import { DuplicatePlusBoldDuotone } from './DuplicatePlusBoldDuotone.js';
import { DuplicatePlusFill } from './DuplicatePlusFill.js';
import { DuplicatePlusFillDuotone } from './DuplicatePlusFillDuotone.js';

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
export default DuplicatePlus;
