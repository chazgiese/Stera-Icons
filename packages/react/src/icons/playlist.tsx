import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PlaylistRegular } from './PlaylistRegular';
import { PlaylistRegularDuotone } from './PlaylistRegularDuotone';
import { PlaylistBold } from './PlaylistBold';
import { PlaylistBoldDuotone } from './PlaylistBoldDuotone';
import { PlaylistFill } from './PlaylistFill';
import { PlaylistFillDuotone } from './PlaylistFillDuotone';

export interface PlaylistProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Playlist with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { PlaylistRegular } from 'stera-icons/PlaylistRegular';
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

export { Playlist };
