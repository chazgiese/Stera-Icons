import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { PlaylistIcon as RegularPlaylistIcon } from './playlist';
import { PlaylistIconBold } from './playlist-bold';
import { PlaylistIconFilled } from './playlist-filled';
import { PlaylistIconFilltone } from './playlist-filltone';
import { PlaylistIconLinetone } from './playlist-linetone';

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
    case 'filltone':
      return <PlaylistIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <PlaylistIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularPlaylistIcon ref={ref} {...props} />;
  }
}));

PlaylistIcon.displayName = 'PlaylistIcon';

export { PlaylistIcon };
