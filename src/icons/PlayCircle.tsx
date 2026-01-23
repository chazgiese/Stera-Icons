import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { PlayCircleRegular } from './PlayCircleRegular.js';
import { PlayCircleRegularDuotone } from './PlayCircleRegularDuotone.js';
import { PlayCircleBold } from './PlayCircleBold.js';
import { PlayCircleBoldDuotone } from './PlayCircleBoldDuotone.js';
import { PlayCircleFill } from './PlayCircleFill.js';
import { PlayCircleFillDuotone } from './PlayCircleFillDuotone.js';

export interface PlayCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * PlayCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PlayCircleRegular } from 'stera-icons/icons/PlayCircleRegular';
 */
const PlayCircle = memo(forwardRef<SVGSVGElement, PlayCircleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PlayCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PlayCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PlayCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PlayCircleFill ref={ref} {...rest} />;
  if (duotone) return <PlayCircleRegularDuotone ref={ref} {...rest} />;
  return <PlayCircleRegular ref={ref} {...rest} />;
}));

PlayCircle.displayName = 'PlayCircle';

// Triple export pattern (lucide-react style)
export { PlayCircle, PlayCircle as PlayCircleIcon, PlayCircle as SiPlayCircle };
export default PlayCircle;
