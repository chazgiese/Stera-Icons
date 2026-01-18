import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChecklistRegular } from './ChecklistRegular';
import { ChecklistRegularDuotone } from './ChecklistRegularDuotone';
import { ChecklistBold } from './ChecklistBold';
import { ChecklistBoldDuotone } from './ChecklistBoldDuotone';
import { ChecklistFill } from './ChecklistFill';
import { ChecklistFillDuotone } from './ChecklistFillDuotone';

export interface ChecklistProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Checklist with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ChecklistRegular } from 'stera-icons/ChecklistRegular';
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

export { Checklist };
