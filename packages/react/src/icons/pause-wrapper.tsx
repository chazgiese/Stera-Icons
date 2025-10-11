import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PauseIcon as PauseIconRegular } from './pause';
import { PauseIconBold } from './pause-bold';
import { PauseIconFilled } from './pause-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface PauseIconProps extends IconProps {
  variant?: IconVariant;
}

const PauseIcon = memo(forwardRef<SVGSVGElement, PauseIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PauseIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PauseIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <PauseIconRegular ref={ref} {...props} />;
  }
}));

PauseIcon.displayName = 'PauseIcon';

export { PauseIcon };
