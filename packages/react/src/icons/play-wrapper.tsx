import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PlayIcon as PlayIconRegular } from './play';
import { PlayIconBold } from './play-bold';
import { PlayIconFilled } from './play-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <PlayIconRegular ref={ref} {...props} />;
  }
}));

PlayIcon.displayName = 'PlayIcon';

export { PlayIcon };
