import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PaperclipIcon as PaperclipIconRegular } from './paperclip';
import { PaperclipIconBold } from './paperclip-bold';
import { PaperclipIconFilled } from './paperclip-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <PaperclipIconRegular ref={ref} {...props} />;
  }
}));

PaperclipIcon.displayName = 'PaperclipIcon';

export { PaperclipIcon };
