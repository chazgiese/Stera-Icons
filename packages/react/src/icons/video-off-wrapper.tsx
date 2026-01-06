import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { VideoOffIcon as RegularVideoOffIcon } from './video-off';
import { VideoOffIconDuotone as VideoOffIconDuotone } from './video-off-duotone';
import { VideoOffIconBold as VideoOffIconBold } from './video-off-bold';
import { VideoOffIconBoldDuotone as VideoOffIconBoldDuotone } from './video-off-bold-duotone';
import { VideoOffIconFill as VideoOffIconFill } from './video-off-fill';
import { VideoOffIconFillDuotone as VideoOffIconFillDuotone } from './video-off-fill-duotone';

export interface VideoOffIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const VideoOffIcon = memo(forwardRef<SVGSVGElement, VideoOffIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <VideoOffIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <VideoOffIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <VideoOffIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <VideoOffIconFill ref={ref} {...props} />;
  if (duotone) return <VideoOffIconDuotone ref={ref} {...props} />;
  return <RegularVideoOffIcon ref={ref} {...props} />;
}));

VideoOffIcon.displayName = 'VideoOffIcon';

export { VideoOffIcon };
