import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { VideoOffIcon as VideoOffIconRegular } from './video-off';
import { VideoOffIconBold } from './video-off-bold';
import { VideoOffIconFilled } from './video-off-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface VideoOffIconProps extends IconProps {
  variant?: IconVariant;
}

const VideoOffIcon = memo(forwardRef<SVGSVGElement, VideoOffIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <VideoOffIconFilled ref={ref} {...props} />;
    case 'bold':
      return <VideoOffIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <VideoOffIconRegular ref={ref} {...props} />;
  }
}));

VideoOffIcon.displayName = 'VideoOffIcon';

export { VideoOffIcon };
