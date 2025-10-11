import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AtomIcon as AtomIconRegular } from './atom';
import { AtomIconBold } from './atom-bold';
import { AtomIconFilled } from './atom-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface AtomIconProps extends IconProps {
  variant?: IconVariant;
}

const AtomIcon = memo(forwardRef<SVGSVGElement, AtomIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <AtomIconFilled ref={ref} {...props} />;
    case 'bold':
      return <AtomIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <AtomIconRegular ref={ref} {...props} />;
  }
}));

AtomIcon.displayName = 'AtomIcon';

export { AtomIcon };
