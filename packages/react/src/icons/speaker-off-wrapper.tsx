import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SpeakerOffIcon as SpeakerOffIconRegular } from './speaker-off';
import { SpeakerOffIconBold } from './speaker-off-bold';
import { SpeakerOffIconFilled } from './speaker-off-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface SpeakerOffIconProps extends IconProps {
  variant?: IconVariant;
}

const SpeakerOffIcon = memo(forwardRef<SVGSVGElement, SpeakerOffIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SpeakerOffIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SpeakerOffIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <SpeakerOffIconRegular ref={ref} {...props} />;
  }
}));

SpeakerOffIcon.displayName = 'SpeakerOffIcon';

export { SpeakerOffIcon };
