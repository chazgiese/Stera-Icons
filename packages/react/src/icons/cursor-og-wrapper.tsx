import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CursorOgIcon as CursorOgIconRegular } from './cursor-og';
import { CursorOgIconBold } from './cursor-og-bold';
import { CursorOgIconFilled } from './cursor-og-filled';
import { CursorOgIconFilltone } from './cursor-og-filltone';
import { CursorOgIconLinetone } from './cursor-og-linetone';

export interface CursorOgIconProps extends IconProps {
  variant?: IconVariant;
}

const CursorOgIcon = memo(forwardRef<SVGSVGElement, CursorOgIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CursorOgIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CursorOgIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CursorOgIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CursorOgIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <CursorOgIconRegular ref={ref} {...props} />;
  }
}));

CursorOgIcon.displayName = 'CursorOgIcon';

export { CursorOgIcon };
