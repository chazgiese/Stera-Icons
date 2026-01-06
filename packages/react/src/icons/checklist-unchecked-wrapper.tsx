import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChecklistUncheckedIcon as RegularChecklistUncheckedIcon } from './checklist-unchecked';
import { ChecklistUncheckedIconDuotone as ChecklistUncheckedIconDuotone } from './checklist-unchecked-duotone';
import { ChecklistUncheckedIconBold as ChecklistUncheckedIconBold } from './checklist-unchecked-bold';
import { ChecklistUncheckedIconBoldDuotone as ChecklistUncheckedIconBoldDuotone } from './checklist-unchecked-bold-duotone';
import { ChecklistUncheckedIconFill as ChecklistUncheckedIconFill } from './checklist-unchecked-fill';
import { ChecklistUncheckedIconFillDuotone as ChecklistUncheckedIconFillDuotone } from './checklist-unchecked-fill-duotone';

export interface ChecklistUncheckedIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChecklistUncheckedIcon = memo(forwardRef<SVGSVGElement, ChecklistUncheckedIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChecklistUncheckedIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChecklistUncheckedIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChecklistUncheckedIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChecklistUncheckedIconFill ref={ref} {...props} />;
  if (duotone) return <ChecklistUncheckedIconDuotone ref={ref} {...props} />;
  return <RegularChecklistUncheckedIcon ref={ref} {...props} />;
}));

ChecklistUncheckedIcon.displayName = 'ChecklistUncheckedIcon';

export { ChecklistUncheckedIcon };
