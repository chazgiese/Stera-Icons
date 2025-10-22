import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { DuplicateIcon as DuplicateIconRegular } from './duplicate';
import { DuplicateIconBold } from './duplicate-bold';
import { DuplicateIconFilled } from './duplicate-filled';
import { DuplicateIconFilltone } from './duplicate-filltone';
import { DuplicateIconLinetone } from './duplicate-linetone';

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
    case 'filltone':
      return <DuplicateIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <DuplicateIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <DuplicateIconRegular ref={ref} {...props} />;
  }
}));

DuplicateIcon.displayName = 'DuplicateIcon';

export { DuplicateIcon };
