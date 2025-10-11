import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChecklistUncheckedIcon as ChecklistUncheckedIconRegular } from './checklist-unchecked';
import { ChecklistUncheckedIconBold } from './checklist-unchecked-bold';
import { ChecklistUncheckedIconFilled } from './checklist-unchecked-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <ChecklistUncheckedIconRegular ref={ref} {...props} />;
  }
}));

ChecklistUncheckedIcon.displayName = 'ChecklistUncheckedIcon';

export { ChecklistUncheckedIcon };
