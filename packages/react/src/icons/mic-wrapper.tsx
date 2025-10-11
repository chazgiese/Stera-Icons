import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MicIcon as MicIconRegular } from './mic';
import { MicIconBold } from './mic-bold';
import { MicIconFilled } from './mic-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface MicIconProps extends IconProps {
  variant?: IconVariant;
}

const MicIcon = memo(forwardRef<SVGSVGElement, MicIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MicIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MicIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <MicIconRegular ref={ref} {...props} />;
  }
}));

MicIcon.displayName = 'MicIcon';

export { MicIcon };
