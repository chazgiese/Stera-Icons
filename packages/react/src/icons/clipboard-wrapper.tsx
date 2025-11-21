import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ClipboardIcon as RegularClipboardIcon } from './clipboard';
import { ClipboardIconBold } from './clipboard-bold';
import { ClipboardIconFilled } from './clipboard-filled';
import { ClipboardIconFilltone } from './clipboard-filltone';
import { ClipboardIconLinetone } from './clipboard-linetone';

export interface ClipboardIconProps extends IconProps {
  variant?: IconVariant;
}

const ClipboardIcon = memo(forwardRef<SVGSVGElement, ClipboardIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ClipboardIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ClipboardIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ClipboardIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ClipboardIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularClipboardIcon ref={ref} {...props} />;
  }
}));

ClipboardIcon.displayName = 'ClipboardIcon';

export { ClipboardIcon };
