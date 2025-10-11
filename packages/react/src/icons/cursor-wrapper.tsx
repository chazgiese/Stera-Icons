import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CursorIcon as CursorIconRegular } from './cursor';
import { CursorIconBold } from './cursor-bold';
import { CursorIconFilled } from './cursor-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <CursorIconRegular ref={ref} {...props} />;
  }
}));

CursorIcon.displayName = 'CursorIcon';

export { CursorIcon };
