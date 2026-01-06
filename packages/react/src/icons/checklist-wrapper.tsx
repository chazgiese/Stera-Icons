import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChecklistIcon as RegularChecklistIcon } from './checklist';
import { ChecklistIconDuotone as ChecklistIconDuotone } from './checklist-duotone';
import { ChecklistIconBold as ChecklistIconBold } from './checklist-bold';
import { ChecklistIconBoldDuotone as ChecklistIconBoldDuotone } from './checklist-bold-duotone';
import { ChecklistIconFill as ChecklistIconFill } from './checklist-fill';
import { ChecklistIconFillDuotone as ChecklistIconFillDuotone } from './checklist-fill-duotone';

export interface ChecklistIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChecklistIcon = memo(forwardRef<SVGSVGElement, ChecklistIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChecklistIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChecklistIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChecklistIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChecklistIconFill ref={ref} {...props} />;
  if (duotone) return <ChecklistIconDuotone ref={ref} {...props} />;
  return <RegularChecklistIcon ref={ref} {...props} />;
}));

ChecklistIcon.displayName = 'ChecklistIcon';

export { ChecklistIcon };
