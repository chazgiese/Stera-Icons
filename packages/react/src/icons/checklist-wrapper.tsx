import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ChecklistIcon as ChecklistIconRegular } from './checklist';
import { ChecklistIconBold } from './checklist-bold';
import { ChecklistIconFilled } from './checklist-filled';
import { ChecklistIconFilltone } from './checklist-filltone';
import { ChecklistIconLinetone } from './checklist-linetone';

export interface ChecklistIconProps extends IconProps {
  variant?: IconVariant;
}

const ChecklistIcon = memo(forwardRef<SVGSVGElement, ChecklistIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ChecklistIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ChecklistIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ChecklistIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ChecklistIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ChecklistIconRegular ref={ref} {...props} />;
  }
}));

ChecklistIcon.displayName = 'ChecklistIcon';

export { ChecklistIcon };
