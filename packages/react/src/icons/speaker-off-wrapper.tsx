import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SpeakerOffIcon as RegularSpeakerOffIcon } from './speaker-off';
import { SpeakerOffIconBold } from './speaker-off-bold';
import { SpeakerOffIconFilled } from './speaker-off-filled';
import { SpeakerOffIconFilltone } from './speaker-off-filltone';
import { SpeakerOffIconLinetone } from './speaker-off-linetone';

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
    case 'filltone':
      return <SpeakerOffIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SpeakerOffIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularSpeakerOffIcon ref={ref} {...props} />;
  }
}));

SpeakerOffIcon.displayName = 'SpeakerOffIcon';

export { SpeakerOffIcon };
