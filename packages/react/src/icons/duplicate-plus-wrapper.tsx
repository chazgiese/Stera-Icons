import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DuplicatePlusIcon as DuplicatePlusIconRegular } from './duplicate-plus';
import { DuplicatePlusIconBold } from './duplicate-plus-bold';
import { DuplicatePlusIconFilled } from './duplicate-plus-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface DuplicatePlusIconProps extends IconProps {
  variant?: IconVariant;
}

const DuplicatePlusIcon = memo(forwardRef<SVGSVGElement, DuplicatePlusIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <DuplicatePlusIconFilled ref={ref} {...props} />;
    case 'bold':
      return <DuplicatePlusIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <DuplicatePlusIconRegular ref={ref} {...props} />;
  }
}));

DuplicatePlusIcon.displayName = 'DuplicatePlusIcon';

export { DuplicatePlusIcon };
