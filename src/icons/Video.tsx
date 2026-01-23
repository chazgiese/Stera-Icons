import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { VideoRegular } from './VideoRegular.js';
import { VideoRegularDuotone } from './VideoRegularDuotone.js';
import { VideoBold } from './VideoBold.js';
import { VideoBoldDuotone } from './VideoBoldDuotone.js';
import { VideoFill } from './VideoFill.js';
import { VideoFillDuotone } from './VideoFillDuotone.js';

export interface VideoProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Video - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { VideoRegular } from 'stera-icons/icons/VideoRegular';
 */
const Video = memo(forwardRef<SVGSVGElement, VideoProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <VideoBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <VideoBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <VideoFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <VideoFill ref={ref} {...rest} />;
  if (duotone) return <VideoRegularDuotone ref={ref} {...rest} />;
  return <VideoRegular ref={ref} {...rest} />;
}));

Video.displayName = 'Video';

// Triple export pattern (lucide-react style)
export { Video, Video as VideoIcon, Video as SiVideo };
export default Video;
