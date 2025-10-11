import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PlayCircleIcon as PlayCircleIconRegular } from './play-circle';
import { PlayCircleIconBold } from './play-circle-bold';
import { PlayCircleIconFilled } from './play-circle-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface PlayCircleIconProps extends IconProps {
  variant?: IconVariant;
}

const PlayCircleIcon = memo(forwardRef<SVGSVGElement, PlayCircleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PlayCircleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PlayCircleIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <PlayCircleIconRegular ref={ref} {...props} />;
  }
}));

PlayCircleIcon.displayName = 'PlayCircleIcon';

export { PlayCircleIcon };
