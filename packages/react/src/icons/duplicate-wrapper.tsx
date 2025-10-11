import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DuplicateIcon as DuplicateIconRegular } from './duplicate';
import { DuplicateIconBold } from './duplicate-bold';
import { DuplicateIconFilled } from './duplicate-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface DuplicateIconProps extends IconProps {
  variant?: IconVariant;
}

const DuplicateIcon = memo(forwardRef<SVGSVGElement, DuplicateIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <DuplicateIconFilled ref={ref} {...props} />;
    case 'bold':
      return <DuplicateIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <DuplicateIconRegular ref={ref} {...props} />;
  }
}));

DuplicateIcon.displayName = 'DuplicateIcon';

export { DuplicateIcon };
