import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChecklistCheckedIcon as ChecklistCheckedIconRegular } from './checklist-checked';
import { ChecklistCheckedIconBold } from './checklist-checked-bold';
import { ChecklistCheckedIconFilled } from './checklist-checked-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <ChecklistCheckedIconRegular ref={ref} {...props} />;
  }
}));

ChecklistCheckedIcon.displayName = 'ChecklistCheckedIcon';

export { ChecklistCheckedIcon };
