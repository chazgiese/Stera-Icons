import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { SpeakerMediumIcon as SpeakerMediumIconRegular } from './speaker-medium';
import { SpeakerMediumIconBold } from './speaker-medium-bold';
import { SpeakerMediumIconFilled } from './speaker-medium-filled';
import { SpeakerMediumIconFilltone } from './speaker-medium-filltone';
import { SpeakerMediumIconLinetone } from './speaker-medium-linetone';

export interface SpeakerMediumIconProps extends IconProps {
  variant?: IconVariant;
}

const SpeakerMediumIcon = memo(forwardRef<SVGSVGElement, SpeakerMediumIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <SpeakerMediumIconFilled ref={ref} {...props} />;
    case 'bold':
      return <SpeakerMediumIconBold ref={ref} {...props} />;
    case 'filltone':
      return <SpeakerMediumIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <SpeakerMediumIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <SpeakerMediumIconRegular ref={ref} {...props} />;
  }
}));

SpeakerMediumIcon.displayName = 'SpeakerMediumIcon';

export { SpeakerMediumIcon };
