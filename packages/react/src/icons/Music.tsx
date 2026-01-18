import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MusicRegular } from './MusicRegular';
import { MusicRegularDuotone } from './MusicRegularDuotone';
import { MusicBold } from './MusicBold';
import { MusicBoldDuotone } from './MusicBoldDuotone';
import { MusicFill } from './MusicFill';
import { MusicFillDuotone } from './MusicFillDuotone';

export interface MusicProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Music - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { MusicRegular } from 'stera-icons/MusicRegular';
 */
const Music = memo(forwardRef<SVGSVGElement, MusicProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <MusicBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <MusicBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <MusicFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <MusicFill ref={ref} {...rest} />;
  if (duotone) return <MusicRegularDuotone ref={ref} {...rest} />;
  return <MusicRegular ref={ref} {...rest} />;
}));

Music.displayName = 'Music';

// Triple export pattern (lucide-react style)
export { Music, Music as MusicIcon, Music as SiMusic };
