import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { VideoIcon as VideoIconRegular } from './video';
import { VideoIconBold } from './video-bold';
import { VideoIconFilled } from './video-filled';
import { VideoIconFilltone } from './video-filltone';
import { VideoIconLinetone } from './video-linetone';

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
    case 'filltone':
      return <VideoIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <VideoIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <VideoIconRegular ref={ref} {...props} />;
  }
}));

VideoIcon.displayName = 'VideoIcon';

export { VideoIcon };
