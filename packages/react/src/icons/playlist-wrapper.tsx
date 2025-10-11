import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PlaylistIcon as PlaylistIconRegular } from './playlist';
import { PlaylistIconBold } from './playlist-bold';
import { PlaylistIconFilled } from './playlist-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface PlaylistIconProps extends IconProps {
  variant?: IconVariant;
}

const PlaylistIcon = memo(forwardRef<SVGSVGElement, PlaylistIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PlaylistIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PlaylistIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <PlaylistIconRegular ref={ref} {...props} />;
  }
}));

PlaylistIcon.displayName = 'PlaylistIcon';

export { PlaylistIcon };
