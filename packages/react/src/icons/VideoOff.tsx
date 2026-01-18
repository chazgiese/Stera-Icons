import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { VideoOffRegular } from './VideoOffRegular';
import { VideoOffRegularDuotone } from './VideoOffRegularDuotone';
import { VideoOffBold } from './VideoOffBold';
import { VideoOffBoldDuotone } from './VideoOffBoldDuotone';
import { VideoOffFill } from './VideoOffFill';
import { VideoOffFillDuotone } from './VideoOffFillDuotone';

export interface VideoOffProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * VideoOff with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { VideoOffRegular } from 'stera-icons/VideoOffRegular';
 */
const VideoOff = memo(forwardRef<SVGSVGElement, VideoOffProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <VideoOffBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <VideoOffBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <VideoOffFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <VideoOffFill ref={ref} {...rest} />;
  if (duotone) return <VideoOffRegularDuotone ref={ref} {...rest} />;
  return <VideoOffRegular ref={ref} {...rest} />;
}));

VideoOff.displayName = 'VideoOff';

export { VideoOff };
