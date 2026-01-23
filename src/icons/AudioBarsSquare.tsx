import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { AudioBarsSquareRegular } from './AudioBarsSquareRegular.js';
import { AudioBarsSquareRegularDuotone } from './AudioBarsSquareRegularDuotone.js';
import { AudioBarsSquareBold } from './AudioBarsSquareBold.js';
import { AudioBarsSquareBoldDuotone } from './AudioBarsSquareBoldDuotone.js';
import { AudioBarsSquareFill } from './AudioBarsSquareFill.js';
import { AudioBarsSquareFillDuotone } from './AudioBarsSquareFillDuotone.js';

export interface AudioBarsSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * AudioBarsSquare - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AudioBarsSquareRegular } from 'stera-icons/icons/AudioBarsSquareRegular';
 */
const AudioBarsSquare = memo(forwardRef<SVGSVGElement, AudioBarsSquareProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <AudioBarsSquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AudioBarsSquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AudioBarsSquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AudioBarsSquareFill ref={ref} {...rest} />;
  if (duotone) return <AudioBarsSquareRegularDuotone ref={ref} {...rest} />;
  return <AudioBarsSquareRegular ref={ref} {...rest} />;
}));

AudioBarsSquare.displayName = 'AudioBarsSquare';

// Triple export pattern (lucide-react style)
export { AudioBarsSquare, AudioBarsSquare as AudioBarsSquareIcon, AudioBarsSquare as SiAudioBarsSquare };
export default AudioBarsSquare;
