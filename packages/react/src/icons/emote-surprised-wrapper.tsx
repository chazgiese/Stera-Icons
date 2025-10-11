import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { EmoteSurprisedIcon as EmoteSurprisedIconRegular } from './emote-surprised';
import { EmoteSurprisedIconBold } from './emote-surprised-bold';
import { EmoteSurprisedIconFilled } from './emote-surprised-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <EmoteSurprisedIconRegular ref={ref} {...props} />;
  }
}));

EmoteSurprisedIcon.displayName = 'EmoteSurprisedIcon';

export { EmoteSurprisedIcon };
