import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { EmoteSurprisedIcon as RegularEmoteSurprisedIcon } from './emote-surprised';
import { EmoteSurprisedIconBold } from './emote-surprised-bold';
import { EmoteSurprisedIconFilled } from './emote-surprised-filled';
import { EmoteSurprisedIconFilltone } from './emote-surprised-filltone';
import { EmoteSurprisedIconLinetone } from './emote-surprised-linetone';

export interface EmoteSurprisedIconProps extends IconProps {
  variant?: IconVariant;
}

const EmoteSurprisedIcon = memo(forwardRef<SVGSVGElement, EmoteSurprisedIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <EmoteSurprisedIconFilled ref={ref} {...props} />;
    case 'bold':
      return <EmoteSurprisedIconBold ref={ref} {...props} />;
    case 'filltone':
      return <EmoteSurprisedIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <EmoteSurprisedIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularEmoteSurprisedIcon ref={ref} {...props} />;
  }
}));

EmoteSurprisedIcon.displayName = 'EmoteSurprisedIcon';

export { EmoteSurprisedIcon };
