import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CursorNavigationIcon as CursorNavigationIconRegular } from './cursor-navigation';
import { CursorNavigationIconBold } from './cursor-navigation-bold';
import { CursorNavigationIconFilled } from './cursor-navigation-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <CursorNavigationIconRegular ref={ref} {...props} />;
  }
}));

CursorNavigationIcon.displayName = 'CursorNavigationIcon';

export { CursorNavigationIcon };
