import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ClipboardTextIcon as RegularClipboardTextIcon } from './clipboard-text';
import { ClipboardTextIconBold } from './clipboard-text-bold';
import { ClipboardTextIconFilled } from './clipboard-text-filled';
import { ClipboardTextIconFilltone } from './clipboard-text-filltone';
import { ClipboardTextIconLinetone } from './clipboard-text-linetone';

export interface ClipboardTextIconProps extends IconProps {
  variant?: IconVariant;
}

const ClipboardTextIcon = memo(forwardRef<SVGSVGElement, ClipboardTextIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ClipboardTextIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ClipboardTextIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ClipboardTextIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ClipboardTextIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularClipboardTextIcon ref={ref} {...props} />;
  }
}));

ClipboardTextIcon.displayName = 'ClipboardTextIcon';

export { ClipboardTextIcon };
