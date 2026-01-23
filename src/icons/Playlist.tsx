import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { PlaylistRegular } from './PlaylistRegular.js';
import { PlaylistRegularDuotone } from './PlaylistRegularDuotone.js';
import { PlaylistBold } from './PlaylistBold.js';
import { PlaylistBoldDuotone } from './PlaylistBoldDuotone.js';
import { PlaylistFill } from './PlaylistFill.js';
import { PlaylistFillDuotone } from './PlaylistFillDuotone.js';

export interface PlaylistProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Playlist - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PlaylistRegular } from 'stera-icons/icons/PlaylistRegular';
 */
const Playlist = memo(forwardRef<SVGSVGElement, PlaylistProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PlaylistBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PlaylistBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PlaylistFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PlaylistFill ref={ref} {...rest} />;
  if (duotone) return <PlaylistRegularDuotone ref={ref} {...rest} />;
  return <PlaylistRegular ref={ref} {...rest} />;
}));

Playlist.displayName = 'Playlist';

// Triple export pattern (lucide-react style)
export { Playlist, Playlist as PlaylistIcon, Playlist as SiPlaylist };
export default Playlist;
