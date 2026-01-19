import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AudioBarsCircleRegular } from './AudioBarsCircleRegular';
import { AudioBarsCircleRegularDuotone } from './AudioBarsCircleRegularDuotone';
import { AudioBarsCircleBold } from './AudioBarsCircleBold';
import { AudioBarsCircleBoldDuotone } from './AudioBarsCircleBoldDuotone';
import { AudioBarsCircleFill } from './AudioBarsCircleFill';
import { AudioBarsCircleFillDuotone } from './AudioBarsCircleFillDuotone';

export interface AudioBarsCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * AudioBarsCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AudioBarsCircleRegular } from 'stera-icons/icons/AudioBarsCircleRegular';
 */
const AudioBarsCircle = memo(forwardRef<SVGSVGElement, AudioBarsCircleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <AudioBarsCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AudioBarsCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AudioBarsCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AudioBarsCircleFill ref={ref} {...rest} />;
  if (duotone) return <AudioBarsCircleRegularDuotone ref={ref} {...rest} />;
  return <AudioBarsCircleRegular ref={ref} {...rest} />;
}));

AudioBarsCircle.displayName = 'AudioBarsCircle';

// Triple export pattern (lucide-react style)
export { AudioBarsCircle, AudioBarsCircle as AudioBarsCircleIcon, AudioBarsCircle as SiAudioBarsCircle };
export default AudioBarsCircle;
