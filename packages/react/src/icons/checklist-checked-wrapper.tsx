import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChecklistCheckedIcon as RegularChecklistCheckedIcon } from './checklist-checked';
import { ChecklistCheckedIconBold } from './checklist-checked-bold';
import { ChecklistCheckedIconFilled } from './checklist-checked-filled';
import { ChecklistCheckedIconFilltone } from './checklist-checked-filltone';
import { ChecklistCheckedIconLinetone } from './checklist-checked-linetone';

export interface ChecklistCheckedIconProps extends IconProps {
  variant?: IconVariant;
}

const ChecklistCheckedIcon = memo(forwardRef<SVGSVGElement, ChecklistCheckedIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChecklistCheckedIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChecklistCheckedIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChecklistCheckedIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChecklistCheckedIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChecklistCheckedIcon ref={ref} {...props} />;
  }
}));

ChecklistCheckedIcon.displayName = 'ChecklistCheckedIcon';

export { ChecklistCheckedIcon };
