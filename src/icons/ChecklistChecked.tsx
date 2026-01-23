import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChecklistCheckedRegular } from './ChecklistCheckedRegular.js';
import { ChecklistCheckedRegularDuotone } from './ChecklistCheckedRegularDuotone.js';
import { ChecklistCheckedBold } from './ChecklistCheckedBold.js';
import { ChecklistCheckedBoldDuotone } from './ChecklistCheckedBoldDuotone.js';
import { ChecklistCheckedFill } from './ChecklistCheckedFill.js';
import { ChecklistCheckedFillDuotone } from './ChecklistCheckedFillDuotone.js';

export interface ChecklistCheckedProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChecklistChecked - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChecklistCheckedRegular } from 'stera-icons/icons/ChecklistCheckedRegular';
 */
const ChecklistChecked = memo(forwardRef<SVGSVGElement, ChecklistCheckedProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChecklistCheckedBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChecklistCheckedBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChecklistCheckedFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChecklistCheckedFill ref={ref} {...rest} />;
  if (duotone) return <ChecklistCheckedRegularDuotone ref={ref} {...rest} />;
  return <ChecklistCheckedRegular ref={ref} {...rest} />;
}));

ChecklistChecked.displayName = 'ChecklistChecked';

// Triple export pattern (lucide-react style)
export { ChecklistChecked, ChecklistChecked as ChecklistCheckedIcon, ChecklistChecked as SiChecklistChecked };
export default ChecklistChecked;
