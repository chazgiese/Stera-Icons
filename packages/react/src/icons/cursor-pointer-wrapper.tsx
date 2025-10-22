import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CursorPointerIcon as CursorPointerIconRegular } from './cursor-pointer';
import { CursorPointerIconBold } from './cursor-pointer-bold';
import { CursorPointerIconFilled } from './cursor-pointer-filled';
import { CursorPointerIconFilltone } from './cursor-pointer-filltone';
import { CursorPointerIconLinetone } from './cursor-pointer-linetone';

export interface CursorPointerIconProps extends IconProps {
  variant?: IconVariant;
}

const CursorPointerIcon = memo(forwardRef<SVGSVGElement, CursorPointerIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CursorPointerIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CursorPointerIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CursorPointerIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CursorPointerIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <CursorPointerIconRegular ref={ref} {...props} />;
  }
}));

CursorPointerIcon.displayName = 'CursorPointerIcon';

export { CursorPointerIcon };
