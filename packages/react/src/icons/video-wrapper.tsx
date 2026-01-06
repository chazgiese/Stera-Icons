import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { VideoIcon as RegularVideoIcon } from './video';
import { VideoIconDuotone as VideoIconDuotone } from './video-duotone';
import { VideoIconBold as VideoIconBold } from './video-bold';
import { VideoIconBoldDuotone as VideoIconBoldDuotone } from './video-bold-duotone';
import { VideoIconFill as VideoIconFill } from './video-fill';
import { VideoIconFillDuotone as VideoIconFillDuotone } from './video-fill-duotone';

export interface VideoIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const VideoIcon = memo(forwardRef<SVGSVGElement, VideoIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <VideoIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <VideoIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <VideoIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <VideoIconFill ref={ref} {...props} />;
  if (duotone) return <VideoIconDuotone ref={ref} {...props} />;
  return <RegularVideoIcon ref={ref} {...props} />;
}));

VideoIcon.displayName = 'VideoIcon';

export { VideoIcon };
