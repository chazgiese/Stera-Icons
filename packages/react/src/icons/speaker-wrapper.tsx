import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SpeakerIcon as RegularSpeakerIcon } from './speaker';
import { SpeakerIconBold } from './speaker-bold';
import { SpeakerIconFilled } from './speaker-filled';
import { SpeakerIconFilltone } from './speaker-filltone';
import { SpeakerIconLinetone } from './speaker-linetone';

export interface SpeakerIconProps extends IconProps {
  variant?: IconVariant;
}

const SpeakerIcon = memo(forwardRef<SVGSVGElement, SpeakerIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SpeakerIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SpeakerIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SpeakerIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SpeakerIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularSpeakerIcon ref={ref} {...props} />;
  }
}));

SpeakerIcon.displayName = 'SpeakerIcon';

export { SpeakerIcon };
