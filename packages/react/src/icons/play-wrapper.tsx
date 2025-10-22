import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { PlayIcon as RegularPlayIcon } from './play';
import { PlayIconBold } from './play-bold';
import { PlayIconFilled } from './play-filled';
import { PlayIconFilltone } from './play-filltone';
import { PlayIconLinetone } from './play-linetone';

export interface PlayIconProps extends IconProps {
  variant?: IconVariant;
}

const PlayIcon = memo(forwardRef<SVGSVGElement, PlayIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PlayIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PlayIconBold ref={ref} {...props} />;
    case 'filltone':
      return <PlayIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <PlayIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularPlayIcon ref={ref} {...props} />;
  }
}));

PlayIcon.displayName = 'PlayIcon';

export { PlayIcon };
