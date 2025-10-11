import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CursorTextAltIcon as CursorTextAltIconRegular } from './cursor-text-alt';
import { CursorTextAltIconBold } from './cursor-text-alt-bold';
import { CursorTextAltIconFilled } from './cursor-text-alt-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <CursorTextAltIconRegular ref={ref} {...props} />;
  }
}));

CursorTextAltIcon.displayName = 'CursorTextAltIcon';

export { CursorTextAltIcon };
