import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChecklistUncheckedIcon as RegularChecklistUncheckedIcon } from './checklist-unchecked';
import { ChecklistUncheckedIconBold } from './checklist-unchecked-bold';
import { ChecklistUncheckedIconFilled } from './checklist-unchecked-filled';
import { ChecklistUncheckedIconFilltone } from './checklist-unchecked-filltone';
import { ChecklistUncheckedIconLinetone } from './checklist-unchecked-linetone';

export interface ChecklistUncheckedIconProps extends IconProps {
  variant?: IconVariant;
}

const ChecklistUncheckedIcon = memo(forwardRef<SVGSVGElement, ChecklistUncheckedIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChecklistUncheckedIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChecklistUncheckedIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChecklistUncheckedIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChecklistUncheckedIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularChecklistUncheckedIcon ref={ref} {...props} />;
  }
}));

ChecklistUncheckedIcon.displayName = 'ChecklistUncheckedIcon';

export { ChecklistUncheckedIcon };
