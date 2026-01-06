import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PlaylistIcon as RegularPlaylistIcon } from './playlist';
import { PlaylistIconDuotone as PlaylistIconDuotone } from './playlist-duotone';
import { PlaylistIconBold as PlaylistIconBold } from './playlist-bold';
import { PlaylistIconBoldDuotone as PlaylistIconBoldDuotone } from './playlist-bold-duotone';
import { PlaylistIconFill as PlaylistIconFill } from './playlist-fill';
import { PlaylistIconFillDuotone as PlaylistIconFillDuotone } from './playlist-fill-duotone';

export interface PlaylistIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const PlaylistIcon = memo(forwardRef<SVGSVGElement, PlaylistIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <PlaylistIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <PlaylistIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <PlaylistIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <PlaylistIconFill ref={ref} {...props} />;
  if (duotone) return <PlaylistIconDuotone ref={ref} {...props} />;
  return <RegularPlaylistIcon ref={ref} {...props} />;
}));

PlaylistIcon.displayName = 'PlaylistIcon';

export { PlaylistIcon };
