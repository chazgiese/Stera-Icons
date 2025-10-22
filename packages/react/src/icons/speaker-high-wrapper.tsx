import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SpeakerHighIcon as SpeakerHighIconRegular } from './speaker-high';
import { SpeakerHighIconBold } from './speaker-high-bold';
import { SpeakerHighIconFilled } from './speaker-high-filled';
import { SpeakerHighIconFilltone } from './speaker-high-filltone';
import { SpeakerHighIconLinetone } from './speaker-high-linetone';

export interface SpeakerHighIconProps extends IconProps {
  variant?: IconVariant;
}

const SpeakerHighIcon = memo(forwardRef<SVGSVGElement, SpeakerHighIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SpeakerHighIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SpeakerHighIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SpeakerHighIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SpeakerHighIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <SpeakerHighIconRegular ref={ref} {...props} />;
  }
}));

SpeakerHighIcon.displayName = 'SpeakerHighIcon';

export { SpeakerHighIcon };
