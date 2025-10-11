import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { VideoIcon as VideoIconRegular } from './video';
import { VideoIconBold } from './video-bold';
import { VideoIconFilled } from './video-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface VideoIconProps extends IconProps {
  variant?: IconVariant;
}

const VideoIcon = memo(forwardRef<SVGSVGElement, VideoIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <VideoIconFilled ref={ref} {...props} />;
    case 'bold':
      return <VideoIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <VideoIconRegular ref={ref} {...props} />;
  }
}));

VideoIcon.displayName = 'VideoIcon';

export { VideoIcon };
