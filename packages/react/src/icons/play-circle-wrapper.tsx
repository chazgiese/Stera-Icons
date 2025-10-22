import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { PlayCircleIcon as PlayCircleIconRegular } from './play-circle';
import { PlayCircleIconBold } from './play-circle-bold';
import { PlayCircleIconFilled } from './play-circle-filled';
import { PlayCircleIconFilltone } from './play-circle-filltone';
import { PlayCircleIconLinetone } from './play-circle-linetone';

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
    case 'filltone':
      return <PlayCircleIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <PlayCircleIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <PlayCircleIconRegular ref={ref} {...props} />;
  }
}));

PlayCircleIcon.displayName = 'PlayCircleIcon';

export { PlayCircleIcon };
