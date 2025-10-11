import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CursorOgIcon as CursorOgIconRegular } from './cursor-og';
import { CursorOgIconBold } from './cursor-og-bold';
import { CursorOgIconFilled } from './cursor-og-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <CursorOgIconRegular ref={ref} {...props} />;
  }
}));

CursorOgIcon.displayName = 'CursorOgIcon';

export { CursorOgIcon };
