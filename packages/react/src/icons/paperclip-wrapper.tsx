import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { PaperclipIcon as PaperclipIconRegular } from './paperclip';
import { PaperclipIconBold } from './paperclip-bold';
import { PaperclipIconFilled } from './paperclip-filled';
import { PaperclipIconFilltone } from './paperclip-filltone';
import { PaperclipIconLinetone } from './paperclip-linetone';

export interface PaperclipIconProps extends IconProps {
  variant?: IconVariant;
}

const PaperclipIcon = memo(forwardRef<SVGSVGElement, PaperclipIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PaperclipIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PaperclipIconBold ref={ref} {...props} />;
    case 'filltone':
      return <PaperclipIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <PaperclipIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <PaperclipIconRegular ref={ref} {...props} />;
  }
}));

PaperclipIcon.displayName = 'PaperclipIcon';

export { PaperclipIcon };
