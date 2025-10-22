import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SpeakerLowIcon as RegularSpeakerLowIcon } from './speaker-low';
import { SpeakerLowIconBold } from './speaker-low-bold';
import { SpeakerLowIconFilled } from './speaker-low-filled';
import { SpeakerLowIconFilltone } from './speaker-low-filltone';
import { SpeakerLowIconLinetone } from './speaker-low-linetone';

export interface SpeakerLowIconProps extends IconProps {
  variant?: IconVariant;
}

const SpeakerLowIcon = memo(forwardRef<SVGSVGElement, SpeakerLowIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SpeakerLowIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SpeakerLowIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SpeakerLowIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SpeakerLowIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularSpeakerLowIcon ref={ref} {...props} />;
  }
}));

SpeakerLowIcon.displayName = 'SpeakerLowIcon';

export { SpeakerLowIcon };
