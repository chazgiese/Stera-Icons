import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChecklistUncheckedRegular } from './ChecklistUncheckedRegular';
import { ChecklistUncheckedRegularDuotone } from './ChecklistUncheckedRegularDuotone';
import { ChecklistUncheckedBold } from './ChecklistUncheckedBold';
import { ChecklistUncheckedBoldDuotone } from './ChecklistUncheckedBoldDuotone';
import { ChecklistUncheckedFill } from './ChecklistUncheckedFill';
import { ChecklistUncheckedFillDuotone } from './ChecklistUncheckedFillDuotone';

export interface ChecklistUncheckedProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChecklistUnchecked - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChecklistUncheckedRegular } from 'stera-icons/icons/ChecklistUncheckedRegular';
 */
const ChecklistUnchecked = memo(forwardRef<SVGSVGElement, ChecklistUncheckedProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChecklistUncheckedBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChecklistUncheckedBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChecklistUncheckedFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChecklistUncheckedFill ref={ref} {...rest} />;
  if (duotone) return <ChecklistUncheckedRegularDuotone ref={ref} {...rest} />;
  return <ChecklistUncheckedRegular ref={ref} {...rest} />;
}));

ChecklistUnchecked.displayName = 'ChecklistUnchecked';

// Triple export pattern (lucide-react style)
export { ChecklistUnchecked, ChecklistUnchecked as ChecklistUncheckedIcon, ChecklistUnchecked as SiChecklistUnchecked };
export default ChecklistUnchecked;
