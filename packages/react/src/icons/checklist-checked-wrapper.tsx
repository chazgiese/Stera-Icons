import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChecklistCheckedIcon as RegularChecklistCheckedIcon } from './checklist-checked';
import { ChecklistCheckedIconDuotone as ChecklistCheckedIconDuotone } from './checklist-checked-duotone';
import { ChecklistCheckedIconBold as ChecklistCheckedIconBold } from './checklist-checked-bold';
import { ChecklistCheckedIconBoldDuotone as ChecklistCheckedIconBoldDuotone } from './checklist-checked-bold-duotone';
import { ChecklistCheckedIconFill as ChecklistCheckedIconFill } from './checklist-checked-fill';
import { ChecklistCheckedIconFillDuotone as ChecklistCheckedIconFillDuotone } from './checklist-checked-fill-duotone';

export interface ChecklistCheckedIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChecklistCheckedIcon = memo(forwardRef<SVGSVGElement, ChecklistCheckedIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChecklistCheckedIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChecklistCheckedIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChecklistCheckedIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChecklistCheckedIconFill ref={ref} {...props} />;
  if (duotone) return <ChecklistCheckedIconDuotone ref={ref} {...props} />;
  return <RegularChecklistCheckedIcon ref={ref} {...props} />;
}));

ChecklistCheckedIcon.displayName = 'ChecklistCheckedIcon';

export { ChecklistCheckedIcon };
