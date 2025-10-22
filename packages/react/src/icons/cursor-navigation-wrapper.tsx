import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CursorNavigationIcon as CursorNavigationIconRegular } from './cursor-navigation';
import { CursorNavigationIconBold } from './cursor-navigation-bold';
import { CursorNavigationIconFilled } from './cursor-navigation-filled';
import { CursorNavigationIconFilltone } from './cursor-navigation-filltone';
import { CursorNavigationIconLinetone } from './cursor-navigation-linetone';

export interface CursorNavigationIconProps extends IconProps {
  variant?: IconVariant;
}

const CursorNavigationIcon = memo(forwardRef<SVGSVGElement, CursorNavigationIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CursorNavigationIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CursorNavigationIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CursorNavigationIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CursorNavigationIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <CursorNavigationIconRegular ref={ref} {...props} />;
  }
}));

CursorNavigationIcon.displayName = 'CursorNavigationIcon';

export { CursorNavigationIcon };
