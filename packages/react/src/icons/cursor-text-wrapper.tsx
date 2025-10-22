import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CursorTextIcon as CursorTextIconRegular } from './cursor-text';
import { CursorTextIconBold } from './cursor-text-bold';
import { CursorTextIconFilled } from './cursor-text-filled';
import { CursorTextIconFilltone } from './cursor-text-filltone';
import { CursorTextIconLinetone } from './cursor-text-linetone';

export interface CursorTextIconProps extends IconProps {
  variant?: IconVariant;
}

const CursorTextIcon = memo(forwardRef<SVGSVGElement, CursorTextIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CursorTextIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CursorTextIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CursorTextIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CursorTextIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <CursorTextIconRegular ref={ref} {...props} />;
  }
}));

CursorTextIcon.displayName = 'CursorTextIcon';

export { CursorTextIcon };
