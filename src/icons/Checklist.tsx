import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ChecklistRegular } from './ChecklistRegular.js';
import { ChecklistRegularDuotone } from './ChecklistRegularDuotone.js';
import { ChecklistBold } from './ChecklistBold.js';
import { ChecklistBoldDuotone } from './ChecklistBoldDuotone.js';
import { ChecklistFill } from './ChecklistFill.js';
import { ChecklistFillDuotone } from './ChecklistFillDuotone.js';

export interface ChecklistProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Checklist - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ChecklistRegular } from 'stera-icons/icons/ChecklistRegular';
 */
const Checklist = memo(forwardRef<SVGSVGElement, ChecklistProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChecklistBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChecklistBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChecklistFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChecklistFill ref={ref} {...rest} />;
  if (duotone) return <ChecklistRegularDuotone ref={ref} {...rest} />;
  return <ChecklistRegular ref={ref} {...rest} />;
}));

Checklist.displayName = 'Checklist';

// Triple export pattern (lucide-react style)
export { Checklist, Checklist as ChecklistIcon, Checklist as SiChecklist };
export default Checklist;
