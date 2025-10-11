import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PauseCircleIcon as PauseCircleIconRegular } from './pause-circle';
import { PauseCircleIconBold } from './pause-circle-bold';
import { PauseCircleIconFilled } from './pause-circle-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface PauseCircleIconProps extends IconProps {
  variant?: IconVariant;
}

const PauseCircleIcon = memo(forwardRef<SVGSVGElement, PauseCircleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PauseCircleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PauseCircleIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <PauseCircleIconRegular ref={ref} {...props} />;
  }
}));

PauseCircleIcon.displayName = 'PauseCircleIcon';

export { PauseCircleIcon };
