import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PlayCircleRegular } from './PlayCircleRegular';
import { PlayCircleRegularDuotone } from './PlayCircleRegularDuotone';
import { PlayCircleBold } from './PlayCircleBold';
import { PlayCircleBoldDuotone } from './PlayCircleBoldDuotone';
import { PlayCircleFill } from './PlayCircleFill';
import { PlayCircleFillDuotone } from './PlayCircleFillDuotone';

export interface PlayCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * PlayCircle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PlayCircleRegular } from 'stera-icons/PlayCircleRegular';
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
