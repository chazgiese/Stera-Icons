import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CursorTextIcon as CursorTextIconRegular } from './cursor-text';
import { CursorTextIconBold } from './cursor-text-bold';
import { CursorTextIconFilled } from './cursor-text-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <CursorTextIconRegular ref={ref} {...props} />;
  }
}));

CursorTextIcon.displayName = 'CursorTextIcon';

export { CursorTextIcon };
