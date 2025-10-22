import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CursorTextAltIcon as RegularCursorTextAltIcon } from './cursor-text-alt';
import { CursorTextAltIconBold } from './cursor-text-alt-bold';
import { CursorTextAltIconFilled } from './cursor-text-alt-filled';
import { CursorTextAltIconFilltone } from './cursor-text-alt-filltone';
import { CursorTextAltIconLinetone } from './cursor-text-alt-linetone';

export interface CursorTextAltIconProps extends IconProps {
  variant?: IconVariant;
}

const CursorTextAltIcon = memo(forwardRef<SVGSVGElement, CursorTextAltIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CursorTextAltIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CursorTextAltIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CursorTextAltIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CursorTextAltIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularCursorTextAltIcon ref={ref} {...props} />;
  }
}));

CursorTextAltIcon.displayName = 'CursorTextAltIcon';

export { CursorTextAltIcon };
