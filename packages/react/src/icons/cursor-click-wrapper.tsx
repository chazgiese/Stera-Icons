import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CursorClickIcon as CursorClickIconRegular } from './cursor-click';
import { CursorClickIconBold } from './cursor-click-bold';
import { CursorClickIconFilled } from './cursor-click-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface CursorClickIconProps extends IconProps {
  variant?: IconVariant;
}

const CursorClickIcon = memo(forwardRef<SVGSVGElement, CursorClickIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CursorClickIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CursorClickIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <CursorClickIconRegular ref={ref} {...props} />;
  }
}));

CursorClickIcon.displayName = 'CursorClickIcon';

export { CursorClickIcon };
