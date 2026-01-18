import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AudioBarsRegular } from './AudioBarsRegular';
import { AudioBarsRegularDuotone } from './AudioBarsRegularDuotone';
import { AudioBarsBold } from './AudioBarsBold';
import { AudioBarsBoldDuotone } from './AudioBarsBoldDuotone';
import { AudioBarsFill } from './AudioBarsFill';
import { AudioBarsFillDuotone } from './AudioBarsFillDuotone';

export interface AudioBarsProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * AudioBars with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { AudioBarsRegular } from 'stera-icons/AudioBarsRegular';
 */
const AudioBars = memo(forwardRef<SVGSVGElement, AudioBarsProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <AudioBarsBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AudioBarsBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AudioBarsFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AudioBarsFill ref={ref} {...rest} />;
  if (duotone) return <AudioBarsRegularDuotone ref={ref} {...rest} />;
  return <AudioBarsRegular ref={ref} {...rest} />;
}));

AudioBars.displayName = 'AudioBars';

export { AudioBars };
