import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CursorClickIcon as CursorClickIconRegular } from './cursor-click';
import { CursorClickIconBold } from './cursor-click-bold';
import { CursorClickIconFilled } from './cursor-click-filled';
import { CursorClickIconFilltone } from './cursor-click-filltone';
import { CursorClickIconLinetone } from './cursor-click-linetone';

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
    case 'filltone':
      return <CursorClickIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CursorClickIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <CursorClickIconRegular ref={ref} {...props} />;
  }
}));

CursorClickIcon.displayName = 'CursorClickIcon';

export { CursorClickIcon };
