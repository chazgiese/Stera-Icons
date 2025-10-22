import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CursorIcon as CursorIconRegular } from './cursor';
import { CursorIconBold } from './cursor-bold';
import { CursorIconFilled } from './cursor-filled';
import { CursorIconFilltone } from './cursor-filltone';
import { CursorIconLinetone } from './cursor-linetone';

export interface CursorIconProps extends IconProps {
  variant?: IconVariant;
}

const CursorIcon = memo(forwardRef<SVGSVGElement, CursorIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CursorIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CursorIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CursorIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CursorIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <CursorIconRegular ref={ref} {...props} />;
  }
}));

CursorIcon.displayName = 'CursorIcon';

export { CursorIcon };
